import React from "react";
import styles from './sky_animation.module.css'
import sky1 from '../../../../../../assets/images/Cloud1.png'
import sky2 from '../../../../../../assets/images/Cloud3.png'




const SkyAnimation =()=>{
    console.log('hello')
    return(

            <div className={styles.container}>

                        <img src={sky1} className={styles.sky1}/>
                <img src={sky2} className={styles.sky2}/>
            </div>





    )

}
export default SkyAnimation