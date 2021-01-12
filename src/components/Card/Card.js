import React from 'react'
import styles from './Card.module.scss'
import Button from '../Button/Button'
import { meals } from '../../data'



const Card = ({ closeCardFn }) => {
    const type = meals[3].type
    const isVege = meals[3].vege
    const isHot = meals[3].hot
    const isSweet = meals[3].sweet
    const isSoup = meals[3].soup
    const isSalad = meals[3].salad

    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <Button onClick={closeCardFn} closeBtn></Button>

                <h1 className={styles.title}>{meals[3].name}</h1>
                <ul>
                    {type === 'dessert' ? (<li>deser</li>) : null}
                    <li>
                        {isVege ? `vege` : `mięsne`}
                    </li>
                    <li>
                        {isHot ? `na gorąco` : `na zimno`}
                    </li>
                    <li>
                        {isSweet ? `na słodko` : `na słono`}
                    </li>
                    <li>
                        {isSoup ? `zupa` : null}
                    </li>
                    <li>
                        {isSalad ? `sałatka` : null}
                    </li>

                </ul>
                <a className={styles.link} href={meals[3].link}>Sprawdź przepis!</a>
                <div className={styles.btnSection}>
                    <Button >Dodaj do kalendarza</Button>
                    <Button secondary>Usuń danie</Button></div>
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={meals[3].image} alt={meals[3].name} />
            </div>
        </div >
    )
}

export default Card;