import React from 'react'
import styles from './List.module.scss'
import ListItem from './ListItem'

const List = ({
    openCardFn,
    ...props }) => (
    <ul className={styles.wrapper} >
        {
            props.items.map((item) => (
                <ListItem onClick={openCardFn} key={item.name} {...item} />
            ))
        }
    </ul >)

export default List;