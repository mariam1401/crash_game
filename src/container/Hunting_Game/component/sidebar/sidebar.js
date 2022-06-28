import React from "react";
import {language} from "../../../../utilis/languages/languages";
import {useRef, useState} from "react";
import {PopupProven} from "../../../../component/popup/popup";
import styles from './sidebar.module.css'
import humanImage from '../../../../assets/images/Group 9.svg'
import provenIcon from '../../../../assets/images/Group 102.svg'
import icon from '../../../../assets/images/Group 102.svg'
import sumIcon from '../../../../assets/images/money 1.svg'
import Menu from "../../../../component/menu/menu";
import useOutsideAlerter from "../../../../utilis/outsideClick";
import useOutsideClick from "../../../../utilis/outsideClick";
import BetContainer from "./component/bet_container";
import useMediaQuery from "use-mediaquery";

const Sidebar =({handle, lang, handleLanguageChange},props)=>{
    const smallScreen = useMediaQuery('(max-width: 750px)')
    const [isProvenOpen,setProven]=useState(false);
    const ref =useRef();
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    const getTranslation = (lang, text) => {
        return language[lang][text];
    };
    const toggleProven =()=>{
        setProven(!isProvenOpen)
    };
    useOutsideClick(wrapperRef, () => {
        toggleProven()
    });
    return (
        <div className={styles.container} ref={ref}>
            <div className={styles.user_information}>
                    <img src={humanImage} className={styles.userImage} alt=''/>
                    <div className={styles.balance_div}>
                        <div className={styles.menu_mobile_div}>
                            <Menu handleChangeLanguage={handleLanguageChange} lang={lang} handle={handle} />
                        </div>
                        <div className={styles.icons}>
                            <img src={sumIcon} className={styles.sumIcon} alt=''/>
                            <span className={styles.balance}>{getTranslation(lang,'BALANCE')}</span>
                            <span className={styles.sum}>500,000(Fun)</span>
                        </div>
                        {/*for mobile landscape version*/}

                    </div>
            </div>

            <div className={styles.menu_container}>
                <div className={styles.text} onClick={toggleProven} >
                    <img src={icon} alt='' className={styles.provenIcon}/>
                    <span className={styles.title}>
                        {getTranslation(lang,'MENU_TEXT')}
                    </span>
                    {isProvenOpen && <PopupProven/>}
                </div>
                <Menu handleChangeLanguage={handleLanguageChange} lang={lang} handle={handle} hidden={smallScreen ? 'none' : 'flex'}/>
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
                h3='HONEST_TEXT'
            />
        </div>
    )
}

export default Sidebar