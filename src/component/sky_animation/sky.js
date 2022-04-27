import React from "react";
import styles from './sky.module.css'
import sky from '../../assets/images/Cloud_1.png'




const Sky =({end})=>{
    return(
            <div className={styles.container} style={end ? {display:'block'} : {display:'none'}}>
                <img src={sky}  className={styles.sky}/>

            </div>

    )
}

export default Sky