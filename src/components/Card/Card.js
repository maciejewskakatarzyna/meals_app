import React from 'react'
import styles from './Card.module.scss'

const Card = () => (
    <div className={styles.wrapper}>
        <div className={styles.info}>
            <h1 className={styles.title}>Meksykańska zupa z batatami, fasolą i chorizo</h1>
            <p>test</p>
            <div className={styles.btnSection}>
                <button className={styles.addBtn}>Dodaj do kalendarza</button>
                <button className={styles.delBtn}>Usuń danie</button></div>
        </div>
        <div className={styles.imageContainer}>
            <img className={styles.image} src='https://assets.tmecosys.com/image/upload/t_web276x230@2x/img/recipe/ras/Assets/73BDF0E2-F8C2-42BD-AB20-6B3FF913A9EB/Derivates/5adab12c-e759-4857-979e-0256fce640ad.jpg' alt='chorizo soup' />
        </div>
    </div>
)

export default Card;