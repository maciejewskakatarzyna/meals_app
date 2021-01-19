import React from 'react'
import styles from './ListItem.module.scss'

const ListItem = ({
    title,
    image,
    ...props
}) => (
    <li className={styles.listItem} {...props}>
        <img
            className={styles.listItemImg}
            src={image} alt={title} />
        <div className={styles.listItemTitle}>
            <p>{title}</p>
        </div>
    </li>
);

export default ListItem;