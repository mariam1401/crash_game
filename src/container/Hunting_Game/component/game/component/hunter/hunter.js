import React, {useEffect, useState} from "react";
import styles from './hunter.module.css'
import hunter from '../../../../../../assets/images/Rifle.png'

const Hunter=()=>{
    const [left,setLeft] = useState(0);

    useEffect(()=>{
        const interval = setInterval(() => {
            if (left >= 40) {
                clearInterval(interval)
                return left
            }
            setLeft(Math.round((left + 1) * 100) / 100)
        }, 80);
        return () => clearInterval(interval);
        },[left])

    return(
        <div className={styles.body}>
            <div className={styles.container} style={{marginLeft:`${left+10}%`}}>
                <img src={hunter} className={styles.hunter}/>
            </div>
          </div>
    )
}
export default Hunter