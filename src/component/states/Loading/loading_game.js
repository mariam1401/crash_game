import React, {useEffect, useState} from "react";
import styles from './loading_game.module.css'
const { REACT_APP_IMG_HANDLER_URL, REACT_APP_SERVICE_IMAGE_SIZE } = process.env;
const loadingImage = `${REACT_APP_IMG_HANDLER_URL}/fit-in/${REACT_APP_SERVICE_IMAGE_SIZE}/images/Loader_Image_Round2.png`;
const Loading_game=({width})=>{
    return(
        <div className={styles.main_container}>
            <div className={styles.image_container}>
                <img src={loadingImage}  className={styles.loaderImage} alt="" />
                <span className={styles.name}>HUNTING</span>
            </div>
            <div className={styles.loader}>
                <div className={styles.loader_fill} style={{width:`${width}%`}}> </div>
            </div>
        </div>
    )
}

export default Loading_game