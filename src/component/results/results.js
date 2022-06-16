import React, {useEffect, useState} from "react";
import styles from './results.module.css'
import closeIcon from '../../assets/images/Close_round (2).svg'
import Loading from "../states/loading/loading";
import Hunter from "../../container/Hunting_Game/component/Game_container/component/hunter/hunter";
import Game from "../../container/Hunting_Game/component/Game_container/game";

const { REACT_APP_IMG_HANDLER_URL, REACT_APP_SMALL_SIZE } = process.env;
const leafBet = `${REACT_APP_IMG_HANDLER_URL}/fit-in/${REACT_APP_SMALL_SIZE}/images/Leaf-Bet 1.png`;


const Results =({})=>{

    //
    // useEffect(
    //     ()=>{
    //         if(finish) {
    //             const interval = setInterval(() => {
    //                 if (isShown) {
    //                     clearInterval(interval)
    //                 }
    //                 setShown(!isShown)
    //             }, 2000);
    //         }
    //     },[finish])
    // // const onClose=()=>{
    // //     setClose(true)
    // // }
    // // useEffect(
    // //     ()=>{
    // //             const interval = setInterval(() => {
    // //                 if(close){
    // //                     window.location.reload()
    // //                    return ()=> clearInterval(interval)
    // //                 }
    // //             }, 100);
    // //     },[close])
    //
    // // const closeResult=()=>{
    // //     setClose(!close)
    // //     window.location.reload()
    // // }
    return(
        // <>
        //     {isShown &&
            <div className={styles.container}>
                <div className={styles.leaf_container}>
                    <div className={styles.image_container}>
                        <img src={leafBet} className={styles.leaf} alt=''/>
                        <div className={styles.text_container}>
                            <span className={styles.text}>YOU_WON</span>
                            <span className={styles.number}>5000</span>
                        </div>
                    </div>
                    <img src={closeIcon} className={styles.closeIcon}/>
                    {/*{close && <Game/>}*/}
                </div>
            </div>
        //     }
        // </>
    )
}
export default Results