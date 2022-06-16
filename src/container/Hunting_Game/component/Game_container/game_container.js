import React from "react";
import styles from './game_container.module.css'
// import game from '../../../../assets/images/Screenshot_1 1.svg'
import {language} from "../../../../utilis/languages/languages";
import Bet_container from "../../../../component/bet_container/bet_container";
import Game from "./game";

const GameContainer = ({lang,multiplier,completed,allowBetting,loading,startVideo,second,skyAnimation,videoEnd})=> {
    const getTranslation = (lang, text) => {
        return language[lang][text];
    }
    return (
        <div className={styles.container}>

            <Game
                getTranslation={getTranslation}
                lang={lang}
                multiplier={multiplier}
                completed={completed}
                allowBetting={allowBetting}
                isLoading={loading}
                second={second}
                startVideo={startVideo}
                startSkyAnimation={skyAnimation}
                videoEnd={videoEnd}
            />
            <Bet_container
                getTranslation={getTranslation}
                lang={lang}
            />
        </div>
    )
}

export default GameContainer