import React from 'react'
import styles from './List.module.scss'
import ListItem from 'components/List/ListItem'
import AppContext from 'context'

const List = ({
    toggleCard,
}) => (
    <AppContext.Consumer>
        {(context) => (
            <ul className={styles.wrapper} >
                {
                    context.map((item) => (
                        <ListItem
                            onClick={() => toggleCard()}
                            key={item.title}
                            {...item} />
                    ))
                }
            </ul >
        )}
    </AppContext.Consumer>
);

export default List;