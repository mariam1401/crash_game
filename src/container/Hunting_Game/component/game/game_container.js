import React from "react";
import styles from './game_container.module.css'
import {language} from "../../../../utilis/languages/languages";
import Bet_container from "./component/bet_container/bet_container";
import Game from "./game";

const GameContainer = ({lang,
                        multiplier,
                        completed,
                        allowBetting,
                        loading,
                        startVideo,
                        second,
                        skyAnimation,
                        videoEnd,
                        handleClickBet,
                        cancelBet,
                        acceptBet,
                        disableButton,
                        setDisable,
                        handleCashOut,
                        handleBettingClick,
                        cashOut,
                        selectedMulti,
                        winBet,
                        numberCont,
                        setCashOut,
                        handleClickAuto,
                        handleClickManual,
    setBetWin,
    setSelectedMulti,
    manual,
    auto,
    btnCLick,
    showResult,closeResult
})=> {
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
                selectedMult={selectedMulti}
                winBet={winBet}
                cashOut={cashOut}
                numCont={numberCont}
                showResult={showResult}
                closeResult={closeResult}
            />
            <Bet_container
                getTranslation={getTranslation}
                lang={lang}
                isLoading={loading}
                handleClick={handleClickBet}
                acceptBet={acceptBet}
                cancelBet={cancelBet}
                disable={disableButton}
                setDisable={setDisable}
                handleCashOut={handleCashOut}
                completed={completed}
                handleBettingClick={handleBettingClick}
                cashOut={cashOut}
                multipler={multiplier}
                setCashOut={setCashOut}
                handleClickAuto={handleClickAuto}
                handleClickManual={handleClickManual}
                manual={manual}
                allowBetting={allowBetting}
                auto={auto}
                btnCLick={btnCLick}
                setSelectedMulti={setSelectedMulti}
                setBetWin={setBetWin}
                selectedMulti={selectedMulti}
                winPLusBet={winBet}
            />
        </div>
    )
}

export default GameContainer