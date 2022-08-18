import React, {useState} from "react";
import {PopupInfo, PopupProven, PopupSettings} from "../popup/popup";
import icon from "../../assets/images/Group 102.svg";
import styles from './menu.module.css'
import screenIcon from "../../assets/images/full-screen-white.png";
import settingsIcon from "../../assets/images/setting-white.png";
import informationIcon from "../../assets/images/info-white.png";

const Menu =({hidden,onClickFUll})=>{
    const [isSettingOpen,setSettings]=useState(false);
    const [isProvenOpen,setProven]=useState(false);
    const [isInfoOpen,setInfo]=useState(false);

    const toggleInfo=()=>{
        setInfo(!isInfoOpen)
    };
    const toggleProven =()=>{
        setProven(!isProvenOpen)
    };
    const toggleSetting =()=> {
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
                onClick={onClickFUll}
                className={styles.icon}
            />
            <img
                src={settingsIcon}
                alt=''
                onClick={toggleSetting}
                 className={styles.icon} />
                {isSettingOpen && <PopupSettings setSettings={setSettings} settings={isSettingOpen}/>}
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