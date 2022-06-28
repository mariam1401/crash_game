import React, {useEffect, useState} from "react";
import styles from './hunter.module.css'
import hunter from '../../../../../../assets/images/Rifle.png'

const Hunter=({multipler})=>{
    const [left,setLeft] = useState(10);
    useEffect(()=>{
        const interval = setInterval(() => {
            if (left >= 40) {
                clearInterval(interval)
                return left
            }
            setLeft((multipler-1) * 100)
        }, 0.01);
        return () => clearInterval(interval);
        },[multipler])

    return(
        <div className={styles.body}>
            <div className={styles.container} style={{marginLeft:`${left + 10}%`}}>
                <img src={hunter} className={styles.hunter}/>
            </div>
          </div>
    )
}
export default Hunter