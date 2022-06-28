import React, {useEffect,useState} from "react";
import classes from "../../game_container.module.css";
import {Bet_div, Betting} from "../../../../../../component/component";
import Loader from 'react-loader-spinner'
import {userBetAsync} from "../../../../../../redux/actions/userBetAction";
import {useDispatch, useSelector} from "react-redux";
import {userCashOutAsync} from "../../../../../../redux/actions/userAuthAction";
import {click} from "@testing-library/user-event/dist/click";
import {isAllOf} from "@reduxjs/toolkit";
import async from "async";

const Bet_container=({
                         getTranslation,
                         lang,
                         isLoading,
                         acceptBet,
                         cancelBet,
                         handleBettingClick,
                         handleCashOut,
                         completed,
                         multipler,
                         setCashOut,
                         handleClickManual,
                         handleClickAuto,
                         cashOut,
    setSelectedMulti,
    setBetWin,
    winPLusBet,
    selectedMulti,
    auto,
    manual,
    btnCLick,
    allowBetting
})=>{
    const[bet,setBet]=useState(20)
    const[coeff,setCoeff]=useState(1.01)
    const [btnColor,setBtnColor]=useState('green')
    const [btnText,setBtnText]=useState('Խաղադրույք')
    const [opacity,setOpacity]=useState(1)
    const [disable,setDisable]=useState(false)
    const [click,setClick]=useState(false)
    const [autoCashOut,setAutoCashOut]=useState(false)
    const [clickCancel,setClickCancel]=useState(false)
    const data = useSelector((state)=>state.userBet)
    const dataCashOut = useSelector((state)=>state.userCashOut.data.data)
    const dispatch=useDispatch()
    const handleValue = event => {
        setBet(event.target.value)
    }
    const handleValueMulti = event =>{
        // console.log(event.target.value,'value')
        setCoeff(event.target.value)
    }
    const increaseBet=()=>{
        setBet(+bet + 1)
    }
    const decreaseBet=()=>{
        if(bet>20){
            setBet(bet - 1)
        }
    }

    const increaseCoeff=()=>{
        setCoeff(Math.round((coeff + 0.01)*100)/100)
    }
    const decreaseCoeff=()=> {
        if (coeff > 1.01) {
            setCoeff(coeff - 0.01)
        }
    }

    useEffect(()=>{
        if (!acceptBet && !cancelBet && manual){
            setBtnColor('#7CDE00')
            setBtnText('Խաղադրույք')
            setDisable(false)
            setOpacity(1)
        }
        else if (acceptBet && !cashOut && !isLoading && manual && (data.status ==='success' || data.status === 'initial') ){
            setBtnColor('rgba(33, 166, 250, 1)')
            setBtnText('Քեշաութ')
            setDisable(true)
            setOpacity(0.5)
        }
        else if(acceptBet && cancelBet && manual){
            setBtnColor('red')
            setBtnText('Չեղարկել')
            setDisable(true)
            setOpacity(0.5)
        }

},[acceptBet,cancelBet,completed,isLoading,manual])


const handleClickAutoCash = () => {
        if(auto){
            if(!click && !clickCancel) {
                setClick(true)
                setClickCancel(true)
                setBtnColor('red')
                setDisable(true)
                setOpacity(0.5)
            }
            else if (click && clickCancel){
                setClick(false)
                setClickCancel(false)
                setBtnColor('green')
                setDisable(false)
                setOpacity(1)
            }
        }
}
    useEffect(()=>{
        if(!isLoading && acceptBet && manual)  {
            dispatch(userBetAsync({bet:bet}))
        }
    },[isLoading,acceptBet,manual])

    useEffect(()=>{
        if(!isLoading && click && auto && allowBetting){
            dispatch(userBetAsync({bet:bet}))
            setAutoCashOut(true)
        }
    },[isLoading,auto,click,allowBetting])

    useEffect(()=>{
         if(auto  && !isLoading && (data.status === 'success') && autoCashOut){
             if(coeff === multipler){
                 dispatch(userCashOutAsync())
                 setCashOut(true)
                 setAutoCashOut(false)
             }
         }
     },[auto,isLoading,cashOut,multipler,coeff])
 return(
            <div className={classes.game_settings}>
                <Bet_div
                    text1={getTranslation(lang,'MECHANICAL')}
                    text2={getTranslation(lang,'AUTOMATIC_TEXT')}
                    disable={disable}
                    opacity={opacity}
                    handleClick={handleClickManual}
                    handleClickAuto={handleClickAuto}
                    auto={auto}
                    manual={manual}
                />
                <div className={classes.bet_container}>
                    <div className={classes.firs_row}>
                        <div style={{opacity:opacity}}>
                            <span className={classes.title}>{getTranslation(lang,'BET_TEXT')}</span>
                            <Betting
                                increase={increaseBet}
                                value={bet}
                                decrease={decreaseBet}
                                opacity={opacity}
                                disable={disable}
                                manual={manual}
                            />
                        </div>
                        <div style={{opacity:opacity}}>
                            <span className={classes.title} style={{opacity:manual ? 1 : 0.5}}>{getTranslation(lang,'AUTO_BET')}</span>
                            <Betting
                                increase={increaseCoeff}
                                value={coeff.toFixed(2)}
                                decrease={decreaseCoeff}
                                disable={(manual || disable) ? true : false}
                                opacity={manual ? 0.5 : 1}
                            />
                        </div>
                    </div>
                    {manual &&
                    <div className={classes.second_row}>
                        {[200, 400, 1000].map((number) => {
                            return <input
                                style={{cursor: 'pointer', opacity: opacity}}
                                value={number}
                                disabled={disable}
                                onClick={handleValue}
                                type='button'
                            />
                        })}
                    </div>
                    }
                    {manual &&
                    <div className={classes.third_row} style={{opacity: opacity}}>
                        <button aria-disabled={disable} value={bet * 2} onClick={handleValue}>2x</button>
                        <button aria-disabled={disable}>{getTranslation(lang, 'ALL_IN_TEXT')}</button>
                    </div>
                    }
                </div>
                <div className={classes.btn}>
                    <button
                        className={classes.bet_btn}
                        onClick={manual ? ((!isLoading && acceptBet) ? handleCashOut : handleBettingClick) : handleClickAutoCash}
                        value={bet}
                        style={{
                            backgroundColor: btnColor
                        }}>
                        {( !isLoading && acceptBet && completed ) ?
                            <Loader
                                type="Oval"
                                color="#fff"
                                height={15}
                                width={150}
                        /> : btnText}
                    </button>
                    <button
                        className={classes.placeBet}
                        disabled={disable}
                        style={{opacity:opacity}}
                    >Place <br/> Bet</button>
                </div>
            </div>
    )
}
export default Bet_container