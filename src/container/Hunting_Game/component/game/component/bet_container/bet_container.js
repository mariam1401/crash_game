import React, {useEffect,useState} from "react";
import classes from "../../game_container.module.css";
import Loader from 'react-loader-spinner'
import {Bet_div, Betting} from "../../../../../../component/component";
import {useDispatch, useSelector} from "react-redux";

const Bet_container=({
                         acceptBet,
                         btnClick,
                         isBet,
                         bet,
                         handleBet,
                         setBet,
                         coeff,
                         setCoeff,
                         getTranslation,
                         lang,
                         completed,
                         handleClickManual,
                         handleClickAuto,
                         auto,
                         manual,
})=>{
    const [btnColor,setBtnColor]=useState('#7CDE00')
    const [btnText,setBtnText]=useState('Խաղադրույք')
    const [opacity,setOpacity]=useState(1)
    const [disable,setDisable]=useState(false)
    const [btnDisable,setBtnDisable]=useState(false)
    const [loading,setLoading]=useState(false)

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
        if (!acceptBet && !isBet && manual){
            setBtnColor('#7CDE00')
            setBtnDisable(false)
            setBtnText('BET_TEXT')
            setDisable(false)
            setOpacity(1)
            setLoading(false)
        }
        else if(acceptBet && !isBet && manual){
            setBtnColor('red')
            setBtnText('CANCEL')
            setDisable(true)
            setBtnDisable(false)
            setOpacity(0.5)
            setLoading(false)
        }
        else if(acceptBet && auto){
            setBtnColor('red')
            setBtnText('CANCEL')
            setDisable(true)
            setBtnDisable(false)
            setOpacity(0.5)
            setLoading(false)
        }
        if (!acceptBet  && auto){
            setBtnColor('#7CDE00')
            setBtnDisable(false)
            setBtnText('BET_TEXT')
            setDisable(false)
            setOpacity(1)
            setLoading(false)
        }
        else if(isBet && completed && manual){
            setBtnDisable(true)
            setDisable(true)
            setLoading(true)
            setBtnColor('#21A6FA')
        }
        else if (isBet && manual){
            setBtnDisable(false)
            setDisable(true)
            setBtnColor('#21A6FA')
            setLoading(false)
            setBtnText('CASH_OUT')
        }
},[acceptBet,isBet,completed,manual,auto])

 return(
     <div className={classes.game_settings}>
                <Bet_div
                    text1={getTranslation(lang,'MECHANICAL')}
                    text2={getTranslation(lang,'AUTOMATIC_TEXT')}
                    disable={disable}
                    opacity={opacity}
                    handleClickManual={handleClickManual}
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
                                disable={disable}
                            />
                        </div>
                        <div style={{opacity:opacity}}>
                            <span className={classes.title} style={{opacity:manual ? 0.5 : 1}}>{getTranslation(lang, 'AUTO_BET')}</span>
                            <Betting
                                increase={increaseCoeff}
                                value={coeff.toFixed(2)}
                                decrease={decreaseCoeff}
                                disable={(manual || disable)}
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
                                onClick={handleBet}
                                type='button'/>
                        }
                        )}
                    </div>
                    }
                    {manual &&
                    <div className={classes.third_row} style={{opacity: opacity}}>
                        <button disabled={disable} value={bet * 2} onClick={handleBet}>2x</button>
                        <button disabled={disable}>
                            {getTranslation(lang, 'ALL_IN_TEXT')}
                        </button>
                    </div>
                    }
                </div>
                <div className={classes.btn}>
                    <button
                        className={classes.bet_btn}
                        value={bet}
                        onClick={ btnClick}
                        disabled={ btnDisable}
                        style={{backgroundColor: btnColor}}>
                        {loading  ?
                            <Loader
                                type="Oval"
                                color="#fff"
                                height={15}
                                width={150}
                        /> : getTranslation(lang,btnText)}
                    </button>
                    {/*<button*/}
                    {/*    className={classes.placeBet}*/}
                    {/*    disabled={disable}*/}
                    {/*    style={{opacity:opacity}}*/}
                    {/*>Place <br/> Bet</button>*/}
                </div>
            </div>
    )
}
export default Bet_container