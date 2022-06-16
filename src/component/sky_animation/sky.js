import React from "react";
import styles from './sky.module.css'
import sky from '../../assets/images/Cloud_1.png'
import duckVideo from "../../assets/images/Zoom_In.mp4";




const Sky =({end,myCallback})=>{
    return(
        <>
        <video autoPlay muted onEnded={() => myCallback()} className={styles.video}
               style={end ? {display: 'none'} : {display: 'flex'}}>
            <source src={duckVideo} type='video/mp4'/>
        </video>
            <div className={styles.container} style={end ? {display:'block'} : {display:'none'}}>
                <img src={sky}  className={styles.sky}/>
            </div>
        </>

    )
}

export default Sky