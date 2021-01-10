import React from 'react'
import styles from './List.module.scss'
import ListItem from './ListItem'
import { meals } from '../../data'

const List = () => (
    <ul className={styles.wrapper}>
        {meals.map(item => (
            <ListItem key={item.name} {...item} />
        ))}
    </ul>
)

export default List;