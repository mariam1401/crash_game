import React, {useState} from 'react'
import styles from './bet_container.module.css'
import {Info_container} from "./user_information";
import {language} from "../../../../../utilis/languages/languages";

const getTranslation = (lang, text) => {
    return language[lang][text];
};

const BetContainer=({
                        lang,
                        user,
                        bet,
                        coeff,
                        img,
                        win,
                        h1,
                        h2,
                        h3,
                        h4,
                        title1,
                        title2,
                        title3
})=>{
    const [active, setActive] = useState(1);
    const buttonIsActive =(index)=>{
       setActive(index)
    }
    return(
        <>
        <div className={styles.bet_container}>
                <div className={styles.heading} style={title3 ? {gridTemplateColumns:'1fr 1fr 1fr'} : {gridTemplateColumns:'1fr 1fr'}}>
                        <button style={active === 1 ? {background:'rgba(33, 166, 250, 1)'} : {background:'transparent'}}
                                onClick={()=>buttonIsActive(1)}>
                                {getTranslation(lang,title1) }
                        </button>
                        <button onClick={()=>buttonIsActive(2)}
                                style={active === 2 ? {background:'rgba(33, 166, 250, 1)'} : {background:'transparent'}}>
                                {getTranslation(lang,title2)}
                        </button>
                    {title3 &&
                    <button onClick={() => buttonIsActive(3)}
                            style={active === 3 ? {background: 'rgba(33, 166, 250, 1)'} : {background: 'transparent'}}>
                        {getTranslation(lang, title3)}
                    </button>
                    }
                </div>
                <div className={styles.betting_container}>
                    <div className={styles.column_name}>
                        {[h1,h2,h3].map((text)=>{
                            return <span className={styles.name}>
                                {getTranslation(lang,text)}
                            </span>
                        })}
                        {h4 ? <span className={styles.name}>
                            {getTranslation(lang,h4)}
                        </span> : null}
                    </div>
                    <Info_container user={user} bet={bet} coeff={coeff} win={win} img={img}/>
                    <Info_container user={user} bet={bet} coeff={coeff} win={win} img={img}/>
                    <Info_container user={user} bet={bet} coeff={coeff} win={win} img={img}/>
                    <Info_container user={user} bet={bet} coeff={coeff} win={win} img={img}/>
                    <Info_container user={user} bet={bet} coeff={coeff} win={win} img={img}/>
                    <Info_container user={user} bet={bet} coeff={coeff} win={win} img={img}/>
                    <div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BetContainer