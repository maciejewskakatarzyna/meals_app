import React from 'react'
import styles from './List.module.scss'
import ListItem from 'components/List/ListItem'

const List = ({
    toggleCard,
    handleCardOpen,
    ...props }) => (
    <ul className={styles.wrapper} >
        {
            props.items.map((item) => (
                <ListItem onClick={(e) => handleCardOpen(e)}
                    onClick={() => toggleCard()}
                    key={item.title} name={item.title}
                    {...item} />
            ))
        }
    </ul >)

export default List;