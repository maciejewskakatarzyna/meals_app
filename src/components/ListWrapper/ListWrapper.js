import React from 'react'
import './ListWrapper.css'
import ListItem from './ListItem/ListItem'
import { meals } from '../../data'


const ListWrapper = () => (
    <ul className="listWrapper">
        {meals.map(item => (
            <ListItem key={item.name} {...item} />
        ))}
    </ul>
)

export default ListWrapper;