import React from 'react';
import ListItem from './ListItem.container';
import '../index.css';

const List = ({ items }) => (
    <ul className="List">
        { items.map(item => <ListItem key={item.id} item={item} />) }
    </ul>
);
 export default List;