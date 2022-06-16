import React, {useEffect} from "react";
import {useState} from "react";
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import Sidebar from "./component/game_information/game_information";
import GameContainer from "./component/Game_container/game_container";
import {Menu_mobile} from "../../component/component";
import styles from './hunting_game.module.css'
import playIcon from '../../assets/images/play-white.png'
import betIcon from '../../assets/images/diamond-white.png'
import statisticIcon from '../../assets/images/diagram-white.png'
import {userAuthAsync, userAuthRefreshAsync} from "../../redux/actions/userAuthAction";
import {useDispatch, useSelector} from "react-redux";


const HuntingGame =({})=>{
    const [lang,setLang]=useState('am')
    const [active,setActive]=useState(false)
    const [multiplier,setMultiplier] = useState()
    const [completed,setCompleted]=useState(false)
    const [allowBet,setAllowBet]=useState(false)
    const [isLoading,setLoading]=useState(false)
    const [second,setSecond]=useState( 5 )
    // const [x, setX] = useState(0)
    // const [close,setClose] = useState(false)
    const [startVideo,setStartVideo]=useState( false)
    const [endVideo,setEndVideo]=useState(false)
    const [startSkyAnimation,setStartSkyAnimation]=useState(false)
    const [showResult,setShowResult]=useState(true)
    const data = useSelector((state)=>state.userAuth.data.data)
    const dispatch = useDispatch()

    useEffect(()=> {
    const Stomp = require("@stomp/stompjs");
    Object.assign(global, {WebSocket: require('isomorphic-ws')});
    let client = new Stomp.Client({
        brokerURL: "ws://18.156.177.65:8080/crash/socket",
        onConnect: () => {
            console.log('connected')
            client.subscribe('/crash/bet', message => {
                const allowBetting = JSON.parse(message.body)
                setAllowBet(allowBetting.allow)
                // console.log(allowBetting.allow,'allowBetting')
            })
            client.subscribe('/crash/state', message => {
                 const multi= JSON.parse(message.body)
                 setMultiplier(multi.multiplier)
                 setCompleted(multi.completed)
                // console.log(multi.completed,'completed')
            })
        },
        onStompError: receipt => {
            console.log(receipt.body);
        }, onWebSocketError: evt => {
            console.log(evt);
        },
    });
    client.activate();
},[])

    useEffect(()=>{
            if(allowBet){
                setLoading(true)
            }
        },[allowBet])

    useEffect(()=>{
        if(isLoading) {
            setStartSkyAnimation(false)
            setMultiplier(0)
            const interval = setInterval(() => {
                if (second <= 0.1) {
                    // debugger
                    clearInterval(interval)
                    setLoading(false)
                    setStartVideo(true)
                    setSecond(5)
                    return second
                }
                setSecond(second - 0.1)
            }, 100)
            return ()=> clearInterval(interval)
        }
    },[isLoading,second])
    const videoEnd = () =>{
        setEndVideo(true)
        setStartVideo(false)
        setStartSkyAnimation(true)

    }
    useEffect(()=>{
        videoEnd()
    },[])

   // useEffect(()=>{
   //         if (startVideo === false){
   //             setStartSkyAnimation(!startSkyAnimation)
   //         }
   //     },[])

    useEffect(()=>{
        if(data){
            const token= data.refreshToken
            dispatch(userAuthRefreshAsync({refreshToken:`${token}`}))
        }
        dispatch(userAuthAsync({username:'user1',password:'1234'}))
    },[])

    const buttonActive=()=>{
        setActive(!active)
    }
    const changeLanguageHandler = (lang) => {
        setLang(lang);
    }
    const handle = useFullScreenHandle();

    return(
            <FullScreen handle={handle}>
                <div className={styles.main_container}>
                    <div className={styles.main_border}>

                        <Sidebar
                            handle={handle}
                            handleLanguageChange={changeLanguageHandler}
                            lang={lang}
                        />
                        <GameContainer
                            lang={lang}
                            multiplier={multiplier}
                            completed={completed}
                            allowBetting={allowBet}
                            loading={isLoading}
                            second={second}
                            skyAnimation={startSkyAnimation}
                            startVideo={startVideo}
                            videoEnd={videoEnd}
                        />

                        {/*For mobile version*/}
                        <div className={styles.menu}>
                            <Menu_mobile
                                image={playIcon}
                                text='Game'
                                color={active ? 'red':'blue'}
                                active={buttonActive}
                            />
                            <Menu_mobile
                                image={betIcon}
                                text='Bet'
                            />
                            <Menu_mobile
                                image={statisticIcon}
                                text='Statistics'
                            />
                        </div>
                    </div>
                </div>
            </FullScreen>

    )
}

export default HuntingGame