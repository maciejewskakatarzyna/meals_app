import React from 'react'
import './ListItem.css'

const ListItem = ({
    name,
    vege,
    type,
    emoji,
    hot,
    thermomix,
    link,
}) => (
    <div className="meal">
        <div className="meal__wrapper">
            <h1 className="meal__name">{name}</h1>
            <div className="meal__description">
                <ul className="meal__list">
                    <li className="meal__listItem"><span>{vege ? `🌱` : `🍗`}</span> {vege ? `vege` : `mięsne`}</li>
                    <li className="meal__listItem"><span>{emoji}</span> {type}</li>
                    <li className="meal__listItem"><span>{hot ? `🔥` : `❄️`}</span> {hot ? `na gorąco` : `na zimno`}</li>
                    <li className="meal__listItem"><span>{thermomix ? `💻` : `🥘`}</span> {thermomix ? `thermomix` : <s>thermomix</s>}</li>
                    <li className="meal__listItem">
                        <a
                            className="meal__link"
                            href={link ? link : null}
                        ><span>📖</span> {link ? `Cookido` : `Brak`}</a
                        >
                    </li>
                </ul>
                <button className="meal__button">Dodaj do menu</button>
            </div>
        </div>
    </div>
)

export default ListItem;