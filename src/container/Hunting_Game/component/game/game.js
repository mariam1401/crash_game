import React, {useEffect, useState} from "react";
import Loading from "../../../../component/states/loading/loading";
import Results from "../../../../component/results/results";
import Hunter from "./component/hunter/hunter";
import Duck from "./component/duck_move/duck";
import styles from './game_container.module.css'
import duckVideo from "../../../../assets/images/Zoom_In.mp4";
import sky from "../../../../assets/images/Cloud_1.png";

const Game=({
                start,
                end,
                showResult,
                result,
                setShowResult,
                multiplier,
                completed,
                second,
                cashOut,
                loading
})=>{
    const [startVideo,setStartVideo]=useState(false)
    const [startSkyAnimation,setStartSkyAnimation]=useState(false)
    const [endVideo,setEndVideo]=useState(false)


    const videoEnd =()=>{
        setStartVideo(false)
        setEndVideo(true)
        setStartSkyAnimation(true)
 }

    useEffect(()=>{
        if(!loading && start){
            setStartVideo(true)
        }
        else if(end){
            setStartSkyAnimation(false)
        }
        else if (endVideo){
            setStartSkyAnimation(true)
        }
    },[loading,start,end])

    useEffect(()=>{
        videoEnd()
    },[])

    const playVideo = ()=>{
        setTimeout(()=> setStartSkyAnimation(true),2800)
    }

 return(
            <div className={styles.game}>
                {loading &&
               <Loading second={second}/>
                }

                {startVideo  &&
                <video autoPlay muted className={styles.video } onEnded={videoEnd} onPlay={playVideo}>
                    <source src={duckVideo} type='video/mp4'/>
                </video>
                }
                {(startSkyAnimation) &&
                    <div className={styles.containerSky1}>
                    <img src={sky} className={styles.sky}/>
                    </div>
                }

                {startSkyAnimation &&
                <div className={styles.containerSky}>
                <Duck
                    multipler={multiplier}
                    start={startSkyAnimation}
                    result={result}
                    cashOut={cashOut}
                    finish={completed}
                    />
                    <Hunter multipler={multiplier}/>
                </div>
                }
                {showResult &&
                <Results
                    finish={completed}
                    setResult={setShowResult}
                    multi={multiplier}/>
                }
                </div>
    )
}
export default Game