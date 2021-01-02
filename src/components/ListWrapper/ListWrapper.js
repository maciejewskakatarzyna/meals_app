import React from 'react'
import './ListWrapper.css'
import Card from './Card/Card'
import { meals } from '../../data'


const ListWrapper = () => (
    <ul className="listWrapper">
        {meals.map(item => (
            <Card key={item.name} {...item} />
        ))}
    </ul>
)

export default ListWrapper;