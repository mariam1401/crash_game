import React, {useRef, useState} from "react";
import styles from './menu.module.css'
import LanguageSwitcherSelector from "../../utilis/languages/component/languageSwitcher";
import screenIcon from "../../assets/images/full-screen-white.png";
import OutsideClickHandler from "react-outside-click-handler/esm/OutsideClickHandler";
import settingsIcon from "../../assets/images/setting-white.png";
import {PopupInfo, PopupProven, PopupSettings} from "../popup/popup";
import informationIcon from "../../assets/images/info-white.png";
import {language} from "../../utilis/languages/languages";
import icon from "../../assets/images/Group 102.svg";
// import useMediaQuery from "use-mediaquery";



const Menu =({handle,hidden})=>{
    // const smallScreen = useMediaQuery('(max-width: 900px)');
    const [isSettingOpen,setSettings]=useState(false);
    const [isProvenOpen,setProven]=useState(false);
    const [isInfoOpen,setInfo]=useState(false);
    // const ref =useRef();
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
            {/*<LanguageSwitcherSelector lang={lang} handleChangeLanguage={handleChangeLanguage}/>*/}
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
                {/*<OutsideClickHandler onOutsideClick={isSettingOpen && toggleSetting}>*/}
            <img
                    src={settingsIcon}
                    alt=''
                    onClick={toggleSetting}
                    className={styles.icon} />
                {isSettingOpen && <PopupSettings/>}
            {/*</OutsideClickHandler>*/}
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