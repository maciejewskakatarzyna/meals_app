import React from 'react'
import styles from './ListItem.module.scss'
import dotsImage from '../../assets/images/dots.png'

const ListItem = ({
    name,
    image,
    ...props
}) => (
    <li className={styles.listItem} {...props}>
        <img
            className={styles.listItemImg}
            src={image} alt={name} />
        <div className={styles.listItemTitle}>
            <p>{name}</p>
            <button>
                <img className={styles.dots}
                    src={dotsImage} alt=""
                />
            </button>
        </div>
    </li>
);

export default ListItem;