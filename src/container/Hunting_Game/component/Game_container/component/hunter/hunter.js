import React, {useEffect, useState} from "react";
import styles from './hunter.module.css'
import hunter from '../../../../../../assets/images/Rifle.png'




const Hunter=({finish,left,video})=>{
    const [z, setZ] = useState(10);
    const [width,setWidth]=useState(100)
    // useEffect(() => {
    //     setInterval(() => {
    //         console.log(finish,'finish')
    //         if(finish){
    //             setZ(left - 1)
    //             setWidth(width + 50)
    //             // console.log(left,'left')
    //         }
    //     }, 100);
    // }, [video,finish]);
// console.log(width,'width')
    return(

        <div className={styles.body}>
            <div className={styles.container} style={finish ? {marginLeft:`${z}%`}:{marginLeft:`${left + 10}%`}}>
                <img
                    src={hunter}
                    className={styles.hunter}

                />
            </div>
          </div>


    )
}
export default Hunter