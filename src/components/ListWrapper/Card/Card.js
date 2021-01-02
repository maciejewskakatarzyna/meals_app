import React from 'react'
import './Card.css'
import ListItem from './ListItem/ListItem'

const Card = ({
    name,
    vege,
    type,
    emoji,
    hot,
    thermomix,
    link,
}) => {
    const vegeEmoji = vege ? `🌱` : `🍗`
    const hotEmoji = hot ? `🔥` : `❄️`
    const thermomixEmoji = thermomix ? `💻` : `🥘`
    const linkEmoji = `📖`
    return (
        <div className="meal">
            <div className="meal__wrapper">
                <h1 className="meal__name">{name}</h1>
                <div className="meal__description">
                    <ul className="meal__list">

                        <ListItem emoji={vegeEmoji}> {vege ? `vege` : `mięsne`} </ListItem>
                        <ListItem emoji={emoji}>{type}</ListItem>
                        <ListItem emoji={hotEmoji}> {hot ? `na gorąco` : `na zimno`} </ListItem>
                        <ListItem emoji={thermomixEmoji}> {thermomix ? `thermomix` : <s>thermomix</s>} </ListItem>
                        <ListItem emoji={linkEmoji}><a
                            className="meal__link"
                            href={link ? link : null}
                            target="_blank"
                            rel="noopener noreferrer"
                        >{link ? `Cookido` : `Brak`}</a></ListItem>

                    </ul>
                    <button className="meal__button">Dodaj do menu</button>
                </div>
            </div>
        </div>
    )
}

export default Card;