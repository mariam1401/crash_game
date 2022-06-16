import React, {useEffect, useState} from 'react'
import styles from "./duck.module.css";
import numberContainer from "../../../../../../assets/images/Bubble.png";
import feather from '../../../../../../assets/images/Untitled-4.png'
const { REACT_APP_IMG_HANDLER_URL, REACT_APP_SMALL_SIZE } = process.env;
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


const Duck =({finish,multipler})=> {
    const [left,setLeft]=useState(0)


    useEffect(()=>{
        if(finish === false) {
            const interval = setInterval(() => {
                if (left >= 40) {
                    clearInterval(interval)
                    return left
                    // return () => clearInterval(interval);

                }
                setLeft(left => left + multipler/3)
            }, 20);
            return () => clearInterval(interval);
        }
    },[left])


console.log(left,'left')
    return(
        <div  className={styles.duck}>
                <div className={styles.number_container}  style={{marginLeft:`${left}%`,transform:'rotate(-10deg)'}} >
                    <img src={numberContainer} className={styles.container}/>
                    <span className={styles.number}>{multipler}</span>
                </div>
                <div className={styles.ducks}
                style={{marginLeft:`${left}%`,transform:'rotate(-10deg)'}}
                >
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
               {/*<img src={feather} className={styles.feather} style={finish ? {display:'flex'} : {display:'none'}} alt=''/>*/}
            {/*</div>*/}
        </div>
    )
}

export default Duck