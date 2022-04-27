import {useState} from "react";
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import Sidebar from "./component/game_information/game_information";
import GameContainer from "./component/Game_container/game_container";
import {Menu_mobile} from "../../component/component";
import styles from './hunting_game.module.css'
import playIcon from '../../assets/images/play-white.png'
import betIcon from '../../assets/images/diamond-white.png'
import statisticIcon from '../../assets/images/diagram-white.png'


const HuntingGame =({finish})=>{
    const [lang,setLang]=useState('am')
    const changeLanguageHandler = (lang) => {
        setLang(lang);
    }
    const handle = useFullScreenHandle();
    return(
        <>
            {finish &&
            <FullScreen handle={handle}>
                <div className={styles.main_container}>
                    <div className={styles.main_border}>
                        <Sidebar handle={handle} handleLanguageChange={changeLanguageHandler} lang={lang}/>
                        <GameContainer lang={lang}/>
                        {/*For mobile version*/}
                        <div className={styles.menu}>
                            <Menu_mobile image={playIcon} text='Game' color='#7CDE00' />
                            <Menu_mobile image={betIcon} text='Bet'/>
                            <Menu_mobile image={statisticIcon} text='Statistics'/>
                        </div>
                    </div>
                </div>
            </FullScreen>
            }
            </>
    )
}

export default HuntingGame