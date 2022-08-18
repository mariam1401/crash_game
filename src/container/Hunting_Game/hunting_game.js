import React, {useEffect,useState} from "react";
import {language} from "../../utilis/languages/languages";
import {userAuthAsync, userAuthRefreshAsync, userCashOutAsync} from "../../redux/actions/userAuthAction";
import {useDispatch, useSelector} from "react-redux";
import {Menu_mobile} from "../../component/component";
import {userBetAsync} from "../../redux/actions/userBetAction";
import Game from "./component/game/game";
import Sidebar from "./component/sidebar/sidebar";
import Bet_container from "./component/game/component/bet_container/bet_container";
import styles from './hunting_game.module.css'
import betIcon from '../../assets/images/diamond-white.png'
import playIcon from '../../assets/images/play-white.png'
import statisticIcon from '../../assets/images/diagram-white.png'



const HuntingGame =({onClick})=>{
    const [lang,setLang]=useState('am')
    const [multiplier,setMultiplier] = useState(1)
    const [completed,setCompleted]=useState(false)
    const [startGame,setStartGame]=useState(false)
    const [endGame,setEndGame]=useState(false)
    const [isLoading,setLoading]=useState(false)
    const [second,setSecond]=useState( 5 )
    const [acceptBet,setAcceptBet]=useState(false)
    const [bet,setBet]=useState(false)
    const [cashOut,setCashOUt]=useState(false)
    const [resultShow,setResultShow]=useState(false)
    const [manual,setManual]=useState(true)
    const [result,setResult]=useState(false)
    const [userBet,setUserBet]=useState(20)
    const[coeff,setCoeff]=useState(1.01)
    const [auto,setAuto]=useState(false)
    const dispatch = useDispatch()
    const dataToken = useSelector((state)=>state.userAuth.data.data)


    useEffect(()=> {
    const Stomp = require("@stomp/stompjs");
    Object.assign(global, {WebSocket: require('isomorphic-ws')});
    let client = new Stomp.Client({
        brokerURL: "ws://18.156.177.65:8080/crash/socket",
        onConnect: () => {
            client.subscribe('/crash/bet', message => {
                const allowBetting = JSON.parse(message.body)
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
    },[])

    useEffect(()=>{
        if(completed){
            setResult(false)
            setLoading(false)
            setTimeout(()=>{
                setResultShow(true)
            },1000)
            setTimeout(()=>{
                setResultShow(false)
                setLoading(true)
                setEndGame(true)
            },4000)
            setBet(false)
        }
    },[completed])


    useEffect(()=>{
        if(isLoading){
            setMultiplier(1)
            const interval = setInterval(() => {
                if(second === 0.2){
        }
                if (second <= 0) {
                    clearInterval(interval)
                    setLoading(false)
                    setStartGame(true)
                    setEndGame(false)
                    setSecond(5)
                    if(acceptBet){
                        dispatch(userBetAsync({bet:userBet}))
                        setBet(true)
                        if(manual) {
                            setAcceptBet(false)
                        }
                    }
                    return second
                }
                setSecond(Math.round((second - 0.1)*100)/100)
            }, 100)
            return ()=> clearInterval(interval)
        }
    },[second,isLoading,acceptBet])

    useEffect(()=>{
        if(auto){
            if(bet){
                if(multiplier === coeff){
                    dispatch(userCashOutAsync())
                    if (!completed) {
                        setTimeout(() => {
                            setResult(true)
                        }, 100)
                        setTimeout(() => {
                            setResult(false)
                        }, 5000)
                    }
                    setBet(false)
                }
            }

        }
    },[auto,bet,multiplier,completed])

    const handleBtnClick = () => {
        if (manual) {
            if (!acceptBet && !bet) {
                setAcceptBet(true)
                setCashOUt(false)
            } else if (bet && !acceptBet && !completed) {
                if (!cashOut) {
                    dispatch(userCashOutAsync())
                    setCashOUt(true)
                    setBet(false)
                    if (!completed) {
                        setTimeout(() => {
                            setResult(true)
                        }, 100)
                        setTimeout(() => {
                            setResult(false)
                        }, 5000)
                    }
                    else{
                        setResult(false)
                    }
                }
            } else {
                setAcceptBet(false)
            }
        } else if (auto) {
                setAcceptBet(!acceptBet)
        }
    }

    const handleValue = event => {
        setUserBet(event.target.value)
    }

    const handleClickManual = () =>{
        setManual(true)
        setAuto(false)
    }

    const handleClickAuto=()=>{
        setManual(false)
        setAuto(true)
    }

    const changeLanguageHandler = (lang) => {
        setLang(lang);
    }

    const getTranslation = (lang, text) => {
        return language[lang][text];
    }

    return(
                    <div className={styles.main_border} >
                        <Sidebar
                            handleLanguageChange={changeLanguageHandler}
                            lang={lang}
                            getTranslation={getTranslation}
                            onClick={onClick}
                        />
                        <div className={styles.container}>
                            <Game
                                start={startGame}
                                end={endGame}
                                acceptBet={acceptBet}
                                btnClick={handleBtnClick}
                                getTranslation={getTranslation}
                                lang={lang}
                                setShowResult={setResultShow}
                                multiplier={multiplier}
                                completed={completed}
                                result={result}
                                second={second}
                                cashOut={cashOut}
                                showResult={resultShow}
                                loading={isLoading}
                            />
                            <Bet_container
                                acceptBet={acceptBet}
                                btnClick={handleBtnClick}
                                isBet={bet}
                                endGame={endGame}
                                getTranslation={getTranslation}
                                lang={lang}
                                bet={userBet}
                                setBet={setUserBet}
                                handleBet={handleValue}
                                coeff={coeff}
                                setCoeff={setCoeff}
                                completed={completed}
                                handleClickAuto={handleClickAuto}
                                handleClickManual={handleClickManual}
                                manual={manual}
                                auto={auto}
                            />
                        </div>
                        {/*For mobile version*/}
                        <div className={styles.menu}>
                            <Menu_mobile
                                image={playIcon}
                                text='Game'
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
    )}

export default HuntingGame