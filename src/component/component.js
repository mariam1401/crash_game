import React from "react";
import styles from './component.module.css'
import addIcon from '../assets/images/Add_round.png'
import minusIcon from '../assets/images/Vector 8.svg'
import {useRef} from "react";

const Betting =({
                    increase,
                    decrease,
                    value,
                    disable,
                    opacity,
})=>{
    const coeffRef=useRef()
    return(
<div className={styles.container}>
        <button className={styles.button}
                onClick={decrease}
                disabled={disable}>
            <img src={minusIcon} alt='' className={styles.minus}/>
        </button>
            <span value={value} ref={coeffRef} style={{opacity:opacity}}>{value}</span>
        <button className={styles.button}
                onClick={increase}
                disabled={disable}
        >
            <img src={addIcon} alt='' className={styles.plus}/>
        </button>
    </div>
)}
const Menu_mobile = ({image,text,color,paddingBottom,active})=>(
    <div className={styles.menu_container} onClick={active}>
        <img src={image} alt=''  />
        <span style={{color,paddingBottom:paddingBottom}} className={styles.text}>{text}</span>
    </div>
)
const  Bet_div=({
                    text1,
                    text2,
                    opacity,
                    disable,
                    handleClick,
                    handleClickAuto,
                    auto,
                    manual
})=>{
    // console.log(manual,'manual')
    return(
        <div className={styles.header} style={{opacity:opacity}}>
            <button
                  className={styles.btn}
                  style={manual ? {background:'rgba(33, 166, 250, 1)'} : {background:'transparent'}}
                  disabled={disable}
                  onClick={handleClick}
            >{text1}</button>
            <button
                className={styles.btn}
                style={auto ? {background:'rgba(33, 166, 250, 1)'} : {background:'transparent'}}
                disabled={disable}
                onClick={handleClickAuto}
            >{text2}</button>
        </div>
    )
}
export {Betting,Menu_mobile,Bet_div}