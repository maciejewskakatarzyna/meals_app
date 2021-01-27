import React from 'react'
import styles from './Card.module.scss'
import Button from 'components/Button/Button'
import AppContext from 'context'

const Card = ({
    toggleCard,
}) =>
(
    <AppContext.Consumer>
        {(context) => (<div className={styles.wrapper}>
            <div className={styles.info}>
                <Button onClick={() => toggleCard()} closeBtn></Button>

                <h1 className={styles.title}>{context[0].title}</h1>
                <ul>
                    {context.type === 'dessert' ? (<li>deser</li>) : null}
                    <li>
                        {context.vege ? `vege` : `mięsne`}
                    </li>
                    <li>
                        {context.hot ? `na gorąco` : `na zimno`}
                    </li>
                    <li>
                        {context.sweet ? `na słodko` : `na słono`}
                    </li>
                    <li>
                        {context.soup ? `zupa` : null}
                    </li>
                    <li>
                        {context.salad ? `sałatka` : null}
                    </li>

                </ul>
                <a className={styles.link} href={context.link}>Sprawdź przepis!</a>
                <div className={styles.btnSection}>
                    <Button >Dodaj do kalendarza</Button>
                    <Button secondary>Usuń danie</Button></div>
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={context[0].image} alt={context.title} />
            </div>
        </div >
        )}

    </AppContext.Consumer>
);

export default Card;