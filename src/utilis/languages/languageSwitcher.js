import React, {useEffect} from "react";
import styles from './languageSwitcher.module.css'

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
                       <li key={lang} onClick={onChange} style={{background:'red'}}>
                           <div value={language.code} className={language.code}>
                               {lang}
                           </div>
                       </li>
                   )
               }})
        return (
            <>
            <div className={styles.lang}>
                <div className={lang}>
            </div>
                    {options1}
            </div>
                </>
        )
}
export default LanguageSwitcherSelector