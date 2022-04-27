import styles from './user_information.module.css'

const Info_container = ({user,bet,coeff,win,img})=>(
    <div className={styles.container}>
        <span>{user}</span>
        {bet ? <span className={styles.sum}>{bet}</span>:null}
        <span>{coeff}</span>
        {win ? <span>{win}</span>:null}
        {img ? <img src={img} alt='' className={styles.icon}/>:null }
    </div>
)
export  {Info_container}