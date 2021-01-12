import React from 'react'
import styles from './ListItem.module.scss'

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
        </div>
    </li>
);

export default ListItem;