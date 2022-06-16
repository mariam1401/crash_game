import React, {useEffect,useState} from "react";
import styles from './game_container.module.css'
import Loading from "../../../../component/states/loading/loading";
import GameVideo from "../../../../component/game/gameVideo";
import duckVideo from "../../../../assets/images/Zoom_In.mp4";
import sky from "../../../../assets/images/Cloud_1.png";
import Hunter from "./component/hunter/hunter";
import Results from "../../../../component/results/results";
import {all} from "redux-saga/effects";
import {findAllByAltText} from "@testing-library/react";
import Duck from "./component/duck_move/duck";

const Game=({multiplier,completed,allowBetting,isLoading,second,startVideo,startSkyAnimation,videoEnd})=>{
    // const [isLoading,setLoading]=useState(false)
    // const [second,setSecond]=useState( 5 )
    //
    // const [x, setX] = useState(0)
    // const [close,setClose] = useState(false)
    // const [startVideo,setStartVideo]=useState( false)
    // const [endVideo,setEndVideo]=useState(false)
    // const [startSkyAnimation,setStartSkyAnimation]=useState(false)
    // const [showResult,setShowResult]=useState(true)

//     useEffect(()=>{
//         if(allowBetting){
//             setLoading(true)
//         }
//     },[allowBetting])
//
//     useEffect(()=>{
//         if(isLoading) {
//             setStartSkyAnimation(false)
//             const interval = setInterval(() => {
//                 if (second <= 0.1) {
//                     // debugger
//                     clearInterval(interval)
//                     setLoading(false)
//                     setStartVideo(true)
//                     setSecond(5)
//                     return second
//                 }
//                 setSecond(second - 0.1)
//             }, 100)
//             return ()=> clearInterval(interval)
//         }
//     },[isLoading,second])
// console.log(second,'second')



 // useEffect(()=>{
 //     if(allowBetting && completed){
 //         const result = setTimeout(()=>{
 //          setShowResult(false)
 //          setLoading(true)
 //          setSecond(5)
 //          setStartSkyAnimation(false)
 //
 //         },5000)
 //     }
 // },[])
 //
 //
 //    useEffect(
 //        ()=>{
 //         if (isLoading){
 //             // setLoading(true)
 //             // setStartVideo(false)
 //             setShowResult(false)
 //            const interval = setInterval(()=>setSecond(second=> {
 //                if (second <= 0.1){
 //                    clearInterval(interval)
 //                    setLoading(!isLoading)
 //                    return second
 //                }
 //                return second - 0.1
 //
 //            }),100)
 //            // if (allowBetting){
 //            //     setSecond(5)
 //            //     setStartSkyAnimation(false)
 //            //     setShowResult(false)
 //            // }
 //            return () => clearInterval(interval)
 //        }
 //         // setLoading(false)
 //         // setEndVideo(false)
 //         // setStartSkyAnimation(false)
 //
 //         },[allowBetting])
 //
 //    useEffect(()=> {
 //        if(isLoading === false){
 //            setStartVideo(true)
 //            setLoading(false)
 //        }
 //    },[isLoading])
 //
 //    useEffect(()=>{
 //        if (startVideo === false){
 //            setStartSkyAnimation(!startSkyAnimation)
 //        }
 //    },[])
 //

    // const videoEnd = () =>{
    //     setEndVideo(true)
    //     setStartVideo(false)
    //     setStartSkyAnimation(true)
    //
    // }
    // useEffect(()=>{
    //     videoEnd()
    // },[startSkyAnimation])

    // useEffect(()=>{
    //     if (completed){
    //         const interval = setInterval(()=>{
    //             setShowResult(true)
    //         },200)
    //         clearInterval(interval)
    //     }
    //
    //   setShowResult(false)
    //
    //
    // },[completed])
    //

  // useEffect(()=>{
  //     videoEnd()
  // },[])


console.log(allowBetting,'allow')
    console.log(completed,'completed')
    console.log(isLoading,'loading')
    console.log(startVideo,'start')

    return(

            <div className={styles.game}>
                {isLoading &&
               <Loading second={second}/>
                }
                {startVideo  &&
                <video autoPlay muted className={styles.video } onEnded={videoEnd}>
                    <source src={duckVideo} type='video/mp4'/>
                </video>
                }
                {(startSkyAnimation) &&
                <div className={styles.containerSky}>
                    <img src={sky} className={styles.sky}/>
                    <Duck finish={completed} multipler={multiplier}/>
                </div>
                }
                {/*<Hunter/>*/}
                {/*{showResult &&*/}
                {/*<Results/>*/}
                {/*}*/}
                {/*{ startSkyAnimation &&*/}
                {/*    <Duck/>*/}
                {/*}*/}
                {/*{(!isLoading) && <Hunter left={x} finish={finish} video={videoEnd}/>}*/}
                {/*    <Results getTranslation={getTranslation} lang={lang} finish={finish} close={closeResult}/>*/}
                    {/*<div className={styles.videos} style={startVideo ? {display: 'flex'} : {display: 'none'}}>*/}
                    {/*<Sky end={videoEnd} myCallback={myCallback}/>*/}
                    {/*</div>*/}

                </div>

    )
}
export default Game