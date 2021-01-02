import React from 'react'
import './ListItem.css'

const ListItem = ({ emoji, children }) =>
(
    <li className="meal__listItem">
        <span>{emoji}</span>
        {children}
    </li>
)

export default ListItem;