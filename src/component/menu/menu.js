import React, {useEffect, useState} from "react";
import styles from './menu.module.css'
import screenIcon from "../../assets/images/full-screen-white.png";
import settingsIcon from "../../assets/images/setting-white.png";
import {PopupInfo, PopupProven, PopupSettings} from "../popup/popup";
import informationIcon from "../../assets/images/info-white.png";
import icon from "../../assets/images/Group 102.svg";

const Menu =({handle,hidden})=>{
    const [isSettingOpen,setSettings]=useState(false);
    const [isProvenOpen,setProven]=useState(false);
    const [isInfoOpen,setInfo]=useState(false);
    const fullScreen =()=>{
        if (window.screen.width === window.innerWidth && window.screen.height === window.innerHeight) {
            handle.exit()
        }
    };
    const toggleInfo=()=>{
        setInfo(!isInfoOpen)
    };
    const toggleProven =()=>{
        setProven(!isProvenOpen)
    };
    const toggleSetting = () => {
        setSettings(!isSettingOpen);
    };
    return(
        <div className={styles.menu}  style={{display:hidden}}>
            <img
                src={icon}
                alt=''
                onClick={toggleProven}
                className={styles.proven}/>
                {isProvenOpen && <PopupProven/>}
            <img
                src={screenIcon}
                alt=''
                onClick={fullScreen}
                className={styles.icon}/>
            <img
                    src={settingsIcon}
                    alt=''
                    onClick={toggleSetting}
                    className={styles.icon} />
                {isSettingOpen && <PopupSettings/>}
            <img
                src={informationIcon}
                alt=''
                onClick={toggleInfo}
                className={styles.icon}/>
            {isInfoOpen && <PopupInfo close={toggleInfo}/>}
        </div>
    )
}
export default Menu