import styles from './game_container.module.css'
// import game from '../../../../assets/images/Screenshot_1 1.svg'
import {language} from "../../../../utilis/languages/languages";
import Bet_container from "../../../../component/bet_container/bet_container";
import Game from "./game";

const GameContainer = ({lang})=> {
    const getTranslation = (lang, text) => {
        return language[lang][text];
    }
    return (
        <div className={styles.container}>
            <Game  getTranslation={getTranslation} lang={lang}/>
            <Bet_container getTranslation={getTranslation} lang={lang}/>
        </div>
    )
}

export default GameContainer