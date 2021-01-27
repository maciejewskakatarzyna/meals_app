import React, { useState } from 'react'
import styles from './Card.module.scss'
import Button from 'components/Button/Button'

const Card = ({
    toggleCard,
    items,
    elName,
    ...props
}) => {


    const name = elName
    const type = items.map((item) => item.type)
    const isVege = items.map((item) => item.vege)
    const isHot = items.map((item) => item.hot)
    const isSweet = items.map((item) => item.sweet)
    const isSoup = items.map((item) => item.soup)
    const isSalad = items.map((item) => item.salad)

    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <Button onClick={() => toggleCard()} closeBtn></Button>

                <h1 className={styles.title}>{name}</h1>
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
                <a className={styles.link} href={items[0].link}>Sprawdź przepis!</a>
                <div className={styles.btnSection}>
                    <Button >Dodaj do kalendarza</Button>
                    <Button secondary>Usuń danie</Button></div>
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={items[0].image} alt={items[0].name} />
            </div>
        </div >
    )
}

export default Card;