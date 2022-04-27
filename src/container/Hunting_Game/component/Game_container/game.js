import React, {useEffect, useRef, useState} from "react";
import styles from './game_container.module.css'
import duckVideo  from '../../../../assets/images/Zoom_In.mp4'
import Loading from "../../../../component/states/loading/loading";
import Duck from "./component/duck_move/duck";
import Hunter from "./component/hunter/hunter";
import Results from "../../../../component/results/results";
import Sky from "../../../../component/sky_animation/sky";

const Game=({getTranslation,lang})=>{
    const [startGame,setStart]=useState(true)
    const [isLoading,setLoading]=useState(true)
    const [second,setSecond]=useState( 5 )
    const [duration, setDuration] = useState(1.01)
    const [startVideo,setVideoStart]=useState(false)
    const [videoEnd,setVideo] = useState(false)
    const [finish, setFinish] = useState(false);
    const [x, setX] = useState(0)
    const [close,setClose] = useState(false)


    useEffect(
        ()=>{
            const interval = setInterval(()=>setSecond(second=> {
                if (second < 0.1){
                    clearInterval(interval)
                    setLoading(!isLoading)
                    setStart(!startGame)
                    return second
                }
                return second - 0.1

            }),130)
        },[]
    )
    useEffect(
        ()=>{
            if(!isLoading) {
                setVideoStart(!startVideo)
            }
        },[isLoading]
    )
    const myCallback = () => {
        setVideo(!videoEnd)
    };
    useEffect(
        ()=>{
            if(videoEnd) {
                setX(number => number + 0.15)
            }
        },[videoEnd]
    )
    useEffect(() => {
        if(videoEnd) {
            const interval = setInterval(() => {
                if (x >= 40) {
                    // clearInterval(interval)
                    // return x
                    return () => clearInterval(interval);

                }
                setX(number => number + 0.15)
            }, 20);
            return () => clearInterval(interval);
        }
    }, [videoEnd,x]);
        useEffect(
            () => {
                if (videoEnd) {
                    const interval = setInterval(() => setDuration(time => {
                    if (time >= 10) {
                        clearInterval(interval)
                        setFinish(true)
                        setStart(!startGame)
                        // setStart(!s)
                        // return duration
                    }
                    return time + 0.01
                }), 3000)
                }
            }, [videoEnd,x,finish]
        )
    const closeResult=()=>{
            if(!startGame){
                setClose(!close)
                setStart(startGame)
                console.log(startGame,'start')
            }
    }
    return(
        <>
            <div className={styles.game}>
                {/*{startGame &&*/}
                <>
                <Loading second={second} end={isLoading}/>
                 {/*<SkyAnimation/>*/}
                    <Duck
                    number={duration.toFixed(2)}
                    finish={finish}
                    left={x > 40 ? 40 : x}
                    video={videoEnd}
                    />
                {(!isLoading) && <Hunter left={x} finish={finish} video={videoEnd}/>}
                    <Results getTranslation={getTranslation} lang={lang} finish={finish} close={closeResult}/>
                    <div className={styles.videos} style={startVideo ? {display: 'flex'} : {display: 'none'}}>
                    <video autoPlay muted onEnded={() => myCallback()} className={styles.video}
                    style={videoEnd ? {display: 'none'} : {display: 'flex'}}>
                    <source src={duckVideo} type='video/mp4'/>
                    </video>
                    <Sky end={videoEnd}/>
                    </div>
                    </>
                </div>

        </>
    )
}
export default Game