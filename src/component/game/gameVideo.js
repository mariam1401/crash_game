import React, {useEffect, useState} from "react";
import styles from './gameVideo.module.css'
import Loading from "../states/loading/loading";
import Duck from "../../container/Hunting_Game/component/Game_container/component/duck_move/duck";
import Hunter from "../../container/Hunting_Game/component/Game_container/component/hunter/hunter";
import duckVideo from "../../assets/images/Zoom_In.mp4";
import sky from "../../assets/images/Cloud_1.png";




const GameVideo =({number,start,end})=>{
    const [startVideo,setStartVideo]=useState( false)
    const [endVideo,setEndVideo]=useState(false)
    const [startSkyAnimation,setStartSkyAnimation]=useState(false)

    useEffect(()=> {
        if(start){
            setStartVideo(true)
        }

    },[start,startVideo])

    useEffect(()=>{
        if (start && !startVideo){
            setStartSkyAnimation(!startSkyAnimation)
        }
    },[start,startVideo])

// console.log(endVideo,'endVideo')
    // useEffect(()=> {
    //    if(endVideo === true){
    //        setEndVideo(false)
    //    }
    // },[endVideo])

   // console.log(endVideo,'endVideo')

     // console.log(endVideo,'video')
// console.log(startVideo,'startVideo')
//     console.log(start,'start')
//     console.log(end,'ghdghygjegy')
    return(
        <>
                    {(startVideo  && end===false ) &&
                    <video autoPlay muted className={styles.video }>
                        {/*// style={end ? {display: 'none'} : {display: 'flex'}}>*/}
                        <source src={duckVideo} type='video/mp4'/>
                    </video>
                    }
            {(startSkyAnimation && end) &&
            <div className={styles.container}>
                <img src={sky} className={styles.sky}/>
            </div>
            }
                {/*// <Duck number={number} video={video} finish={finish} left={left}/>*/}
                <Hunter/>

        </>
    )
}
export default GameVideo