import React, { useState } from 'react'
import styles from './List.module.scss'
import ListItem from './ListItem'

const List = ({
    toggleCard,
    ...props }) => (
    <ul className={styles.wrapper} >
        {
            props.items.map((item) => (
                <ListItem onClick={() => toggleCard()} key={item.title} {...item} />
            ))
        }
    </ul >)

export default List;