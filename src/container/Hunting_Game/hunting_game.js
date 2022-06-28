import React, {useEffect} from "react";
import {useState} from "react";
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import Sidebar from "./component/sidebar/sidebar";
import GameContainer from "./component/game/game_container";
import {Menu_mobile} from "../../component/component";
import styles from './hunting_game.module.css'
import playIcon from '../../assets/images/play-white.png'
import betIcon from '../../assets/images/diamond-white.png'
import statisticIcon from '../../assets/images/diagram-white.png'
import {userAuthAsync, userAuthRefreshAsync, userCashOutAsync} from "../../redux/actions/userAuthAction";
import {useDispatch, useSelector} from "react-redux";

const HuntingGame =()=>{
    const [lang,setLang]=useState('am')
    const [active,setActive]=useState(false)
    const [multiplier,setMultiplier] = useState(1)
    const [completed,setCompleted]=useState(false)
    const [allowBet,setAllowBet]=useState(false)
    const [isLoading,setLoading]=useState(false)
    const [second,setSecond]=useState( 5 )
    const [acceptBet,setAcceptBet]=useState(false)
    const [click,setClick]=useState(true)
    const [startVideo,setStartVideo]=useState( false)
    const [cancelBet,setCancelBet]=useState(false)
    const [cashOut,setCashOut]=useState(false)
    const [endVideo,setEndVideo]=useState(false)
    const [startSkyAnimation,setStartSkyAnimation]=useState(false)
    const [disableButton,setDisableButton]=useState(false)
    const [isShowNumCont,setShownNumCont]=useState(true)
    const [isShowResult,setShowResult]=useState(false)
    const [auto,setAuto]=useState(false)
    const [manual,setManual] = useState(true)
    const dispatch = useDispatch()
    const [winPLusBet,setWinPLusBet]=useState()
    const [selectedMultiplier,setSelectedMultiplier]=useState()
    const dataToken = useSelector((state)=>state.userAuth.data.data)
    const data = useSelector((state)=>state.userCashOut.data.data)
    const dataBet = useSelector((state)=>state.userBet)

    useEffect(()=> {
    const Stomp = require("@stomp/stompjs");
    Object.assign(global, {WebSocket: require('isomorphic-ws')});
    let client = new Stomp.Client({
        brokerURL: "ws://18.156.177.65:8080/crash/socket",
        onConnect: () => {
            client.subscribe('/crash/bet', message => {
                const allowBetting = JSON.parse(message.body)
                setAllowBet(allowBetting.allow)
            })
            client.subscribe('/crash/state', message => {
                 const multi= JSON.parse(message.body)
                 setMultiplier(multi.multiplier)
                 setCompleted(multi.completed)
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
        dispatch(userAuthAsync({username:'user1',password:'1234'}))
        if(dataToken){
            const token= dataToken.refreshToken
            dispatch(userAuthRefreshAsync({refreshToken:`${token}`}))
        }
        videoEnd()
    },[])

    useEffect(()=>{
        if(completed){
            setAcceptBet(false)
            setCancelBet(false)
            setShownNumCont(false)
            setTimeout(()=>{
                setShowResult(true)
            },2000)
            setTimeout(()=>{
                setShowResult(false)
                setLoading(true)
            },6000)
        }
    },[completed])

    useEffect(()=>{
        if(cashOut && dataBet.status === 'success' && manual){
            dispatch(userCashOutAsync())
            setCashOut(false)
            setAcceptBet(false)
            setCancelBet(false)
        }

        if(data){
            setSelectedMultiplier(data.selectedMultiplier)
            setWinPLusBet(data.winPlusBet)
        }
    },[cashOut,data])
    useEffect(()=>{
        if(isLoading) {
            setStartSkyAnimation(false)
            setMultiplier(1)
            setCashOut(false)
            setClick(true)
            setShownNumCont(true)
            setSelectedMultiplier()
            setWinPLusBet()
            const interval = setInterval(() => {
                if (second <= 0.1) {
                    clearInterval(interval)
                    setLoading(false)
                    setStartVideo(true)
                    setSecond(5)
                    setDisableButton(false)
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
    const handleClickManual = () =>{
        setManual(true)
        setAuto(false)
    }
    const handleClickAuto=()=>{
        setAuto(true)
        setManual(false)
    }
    const handleResultCloseClick = () =>{
        if(click){
            setShowResult(false)
            setLoading(true)
        }
    }
    const handleCashOut = ()=> {
        if (!completed && click  && manual) {
            setClick(false)
            setCashOut(true)
            setCancelBet(false)
            setAcceptBet(false)
        }
    }

    const handleBettingClick = () => {
        if (isLoading){
            if(!acceptBet && !cancelBet){
                setAcceptBet(true)
                setCancelBet(true)
            }
            else if (cancelBet && acceptBet){
                setAcceptBet(false)
                setCancelBet(false)
            }
        }
    }

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
                            disableButton={disableButton}
                            setDisable={setDisableButton}
                            acceptBet={acceptBet}
                            cancelBet={cancelBet}
                            videoEnd={videoEnd}
                            handleCashOut={handleCashOut}
                            handleBettingClick={handleBettingClick}
                            selectedMulti={selectedMultiplier}
                            setSelectedMulti={setSelectedMultiplier}
                            setBetWin={setWinPLusBet}
                            winBet={winPLusBet}
                            cashOut={cashOut}
                            btnCLick={click}
                            numberCont={isShowNumCont}
                            showResult={isShowResult}
                            setCashOut={setCashOut}
                            handleClickAuto={handleClickAuto}
                            handleClickManual={handleClickManual}
                            closeResult={handleResultCloseClick}
                            manual={manual}
                            auto={auto}
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