import React, {useEffect} from "react";
import {useRef, useState} from "react";
import {PopupInfo, PopupProven, PopupSettings} from "../../../../component/popup/popup";
import useMediaQuery from "use-mediaquery";
import BetContainer from "./component/bet_container";
import Menu from "../../../../component/menu/menu";
import icon from '../../../../assets/images/Group 102.svg'
import styles from './sidebar.module.css'
import classes from '../../../../component/menu/menu.module.css'
import sumIcon from '../../../../assets/images/money 1.svg'
import screenIcon from "../../../../assets/images/full-screen-white.png";
import humanImage from '../../../../assets/images/Group 9.svg'
import provenIcon from '../../../../assets/images/Group 102.svg'
import settingsIcon from "../../../../assets/images/setting-white.png";
import informationIcon from "../../../../assets/images/info-white.png";

const Sidebar =({handleLanguageChange,lang,getTranslation,onClick})=>{
    const smallScreen = useMediaQuery('(max-width: 750px)')
    const [isProvenOpen,setProven]=useState(false);
    const [isInfoOpen,setInfo]=useState(false);
    const [isSettingOpen,setSettings]=useState(false);
    const infoRef = useRef(null);
    const provenRef = useRef(null);

    function useOutsideAlerterProven(ref) {
        useEffect(() => {
            function handleOutsideClick(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setProven(false)
                }}
            document.addEventListener("click", handleOutsideClick);
            return () => document.removeEventListener("click", handleOutsideClick);
        }, [ref]);
    }
        const useOutsideAlerterInfo=(ref)=> {
            useEffect(() => {
                function handleOutsideClick(event) {
                    if (ref.current && !ref.current.contains(event.target)) {
                        setInfo(false)
                    }}
                document.addEventListener("click", handleOutsideClick);
                return () => document.removeEventListener("click", handleOutsideClick);
            }, [ref]);
        }
        useOutsideAlerterInfo(infoRef);
        useOutsideAlerterProven(provenRef);

    const toggleProven =()=>{
        setProven(!isProvenOpen)
    };
    const toggleInfo=()=>{
            setInfo(!isInfoOpen)
        };
    const toggleSetting =()=> {
            setSettings(!isSettingOpen);
        };

    return (
        <div className={styles.container}>
            <div className={styles.user_information}>
                    <img src={humanImage} className={styles.userImage} alt=''/>
                    <div className={styles.balance_div}>
                        <div className={styles.menu_mobile_div}>
                            <Menu
                                handleChangeLanguage={handleLanguageChange}
                                lang={lang}
                                onClickFUll={onClick}
                            />
                        </div>
                        <div className={styles.icons}>
                            <img src={sumIcon} className={styles.sumIcon} alt=''/>
                            <span className={styles.balance}>
                                { getTranslation(lang,'BALANCE')}

                            </span>
                            <span className={styles.sum}>500,000(Fun)</span>
                        </div>
                        {/*for mobile landscape version*/}
                    </div>
            </div>

            <div className={styles.menu_container}>
                <div className={styles.text} onClick={toggleProven}  ref={provenRef}>
                    <img src={icon} alt='' className={styles.provenIcon}/>
                    <span className={styles.title}>
                        {getTranslation(lang,'MENU_TEXT')}

                    </span>
                    {isProvenOpen && <PopupProven/>}
                </div>

                <div className={classes.menu} style={{display :smallScreen ? 'none' : 'flex'}}>
                   <img src={screenIcon} alt=''
                        onClick={onClick}
                        className={classes.icon}/>
                   <img src={settingsIcon} alt='' onClick={toggleSetting} className={classes.icon} />{isSettingOpen && <PopupSettings setSettings={setSettings} settings={isSettingOpen}/>}
                   <img ref={infoRef} src={informationIcon} alt='' onClick={toggleInfo} className={classes.icon}/>
                   {isInfoOpen && <PopupInfo close={toggleInfo}/>}
                </div>
            </div>
            <BetContainer
                title1='ALL_BET_TEXT'
                title2='MY_BET_TEXT'
                title3='MY_WIN_TEXT'
                lang={lang}
                user='m***k'
                bet='341դր․'
                coeff='----'
                win='----'
                h1='USER_TEXT'
                h2='BET_TEXT'
                h3='PROGRESS_TEXT'
                h4='WIN_TEXT'
                getTranslation={getTranslation}
            />
            <BetContainer
                lang={lang}
                title1='HISTORY_TEXT'
                title2='HIGHEST_TEXT'
                user='01457896'
                coeff='Շուտով'
                img={provenIcon}
                h1='USER_ID_TEXT'
                h2='PROGRESS_TEXT'
                h3='HONEST_TEXT'/>
        </div>
    )
}

export default Sidebar