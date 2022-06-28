import React, {useEffect, useState} from 'react'
import {PopupWin} from "../../../../../../component/popup/popup";
const { REACT_APP_IMG_HANDLER_URL, REACT_APP_SMALL_SIZE } = process.env;
import styles from "./duck.module.css";
import numberContainer from "../../../../../../assets/images/Bubble.png";
import {useSelector} from "react-redux";
const duck1 = `${REACT_APP_IMG_HANDLER_URL}/fit-in/${REACT_APP_SMALL_SIZE}/images/1.png`;
const duck2= `${REACT_APP_IMG_HANDLER_URL}/fit-in/${REACT_APP_SMALL_SIZE}/images/2.png`;
const duck3 = `${REACT_APP_IMG_HANDLER_URL}/fit-in/${REACT_APP_SMALL_SIZE}/images/3.png`;
const duck4 = `${REACT_APP_IMG_HANDLER_URL}/fit-in/${REACT_APP_SMALL_SIZE}/images/4.png`;
const duck5 = `${REACT_APP_IMG_HANDLER_URL}/fit-in/${REACT_APP_SMALL_SIZE}/images/6.png`;
const duck6 = `${REACT_APP_IMG_HANDLER_URL}/fit-in/${REACT_APP_SMALL_SIZE}/images/5.png`;
const duck7 = `${REACT_APP_IMG_HANDLER_URL}/fit-in/${REACT_APP_SMALL_SIZE}/images/7.png`;
const duck8 = `${REACT_APP_IMG_HANDLER_URL}/fit-in/${REACT_APP_SMALL_SIZE}/images/8.png`;
const duck9 = `${REACT_APP_IMG_HANDLER_URL}/fit-in/${REACT_APP_SMALL_SIZE}/images/9.png`;
const duck10 = `${REACT_APP_IMG_HANDLER_URL}/fit-in/${REACT_APP_SMALL_SIZE}/images/10.png`;


const Duck =({
                 multipler,
                 selectedMulti,
                 winBet,
                 cashOut,
                 numberCont,
                 finish
})=> {
    const [left,setLeft]=useState(0)
    const [resultIsShow,setResultIsShow]=useState(false)
    const data = useSelector((state)=>state.userBet)


    useEffect(()=>{
        const interval = setInterval(() => {
            if (left >= 40) {
                clearInterval(interval)
                return left
            }
            setLeft(left + 0.15)
        }, 12);
        return () => clearInterval(interval);
    },[left])


    useEffect(()=>{
        if (cashOut && data.status === 'success'){
            setResultIsShow(true)
        }
        setTimeout(()=>{
            setResultIsShow(false)
        },9000)
        if (finish && cashOut){
            setTimeout(()=>{
                setResultIsShow(false)
            },3000)
            setResultIsShow(false)
        }
    },[cashOut])
    return(
        <div  className={styles.container} style={{marginLeft:`${left}%`}}>
            <div className={finish ? `${styles.deadDuck_container}`:`${styles.duckContainer}`}>
                {numberCont &&
                <div className={styles.number_container}>
                    <img src={numberContainer} className={styles.image}/>
                    <span className={styles.number}>{multipler}</span>
                </div>
                }   <div className={styles.duck}>
                    <img src={duck1} className={styles.duck1}/>
                    <img src={duck2} className={styles.duck2} alt=''/>
                    <img src={duck3} className={styles.duck3} alt=''/>
                    <img src={duck4} className={styles.duck4} alt=''/>
                    <img src={duck5} className={styles.duck5} alt=''/>
                    <img src={duck6} className={styles.duck6} alt=''/>
                    <img src={duck7} className={styles.duck7} alt=''/>
                    <img src={duck8} className={styles.duck8} alt=''/>
                    <img src={duck9} className={styles.duck9} alt=''/>
                    <img src={duck10} className={styles.duck10} alt=''/>
                    </div>
                </div>
            {resultIsShow &&
            <PopupWin multi={selectedMulti} winBet={winBet} cashOut={cashOut}/>
            }
        </div>
    )
}

export default Duck