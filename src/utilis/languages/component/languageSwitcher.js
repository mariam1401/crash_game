// import {language} from "../languages";
import {useEffect} from "react";
import styles from './languageSwitcher.module.css'
import {render} from "react-dom";

const languages = [
    { code: 'am', name: 'Armenian'},
    { code: 'en', name: 'English'},
]

const LanguageSwitcherSelector =({lang,handleChangeLanguage})=> {
   const onChange = e =>{
        handleChangeLanguage(e.target.className);
    }

           const options1 = languages.map(language => {
               if (language.code !== lang) {
                   return (
                       <li onClick={onChange} style={{background:'red'}}>
                           <div value={language.code} className={language.code}>
                               {lang}
                           </div>
                       </li>
                   )
               }
           })

    console.log(options1)
        return (

            <>
            <div className={styles.lang}>
                <div
                    className={lang}
                >
                </div>
                {/*<ul className="dropdown" style={{background: 'green'}} >*/}
                    {options1}
                {/*</ul>*/}
            </div>
                </>
        )
}
export default LanguageSwitcherSelector