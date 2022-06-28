import React  from "react";
import styles from './results.module.css'
import closeIcon from '../../assets/images/Close_round (2).svg'
const { REACT_APP_IMG_HANDLER_URL, REACT_APP_SMALL_SIZE } = process.env;
const leafBet = `${REACT_APP_IMG_HANDLER_URL}/fit-in/${REACT_APP_SMALL_SIZE}/images/Leaf-Bet 1.png`;

const Results =({finish,multi,close})=>{
    return(
            <div className={styles.container}>
                <div className={styles.leaf_container}>
                    <div className={styles.image_container}>
                        <img src={leafBet} className={styles.leaf} alt=''/>
                        <div className={styles.text_container}>
                            <span className={styles.text}>Խաղի արդյունքը</span>
                            <span className={styles.number}>{finish && multi}</span>
                        </div>
                    </div>
                    <img src={closeIcon} className={styles.closeIcon} onClick={close} alt=' '/>
                </div>
            </div>
    )
}
export default Results