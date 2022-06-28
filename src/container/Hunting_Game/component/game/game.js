import React from "react";
import Loading from "../../../../component/states/loading/loading";
import Results from "../../../../component/results/results";
import Hunter from "./component/hunter/hunter";
import Duck from "./component/duck_move/duck";
import styles from './game_container.module.css'
import duckVideo from "../../../../assets/images/Zoom_In.mp4";
import sky from "../../../../assets/images/Cloud_1.png";

const Game=({
                multiplier,
                completed,
                isLoading,
                second,
                startVideo,
                startSkyAnimation,
                videoEnd,
                cashOut,
                selectedMult,
                winBet,
                showResult,
                closeResult,
                numCont})=>{
 return(
            <div className={styles.game}>
                {isLoading &&
               <Loading second={second}/>
                }
                {startVideo  &&
                <video autoPlay muted className={styles.video } onEnded={videoEnd}>
                    <source src={duckVideo} type='video/mp4'/>
                </video>
                }
                {(startSkyAnimation) &&
                <div className={styles.containerSky}>
                    <img src={sky} className={styles.sky}/>
                    <Duck
                        multipler={multiplier}
                        start={startSkyAnimation}
                        selectedMulti={selectedMult}
                        winBet={winBet}
                        cashOut={cashOut}
                        numberCont={numCont}
                        finish={completed}
                    />
                    <Hunter multipler={multiplier}/>
                </div>
                }
                {showResult &&
                <Results finish={completed} multi={multiplier}  close={closeResult}/>
                }
                </div>
    )
}
export default Game