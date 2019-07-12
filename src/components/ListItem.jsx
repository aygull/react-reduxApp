import React from 'react';
import '../index.css'

const ListItem = ({ toggleExpand, item, isOpened }) => (
    <li className="ListItem" onClick={toggleExpand}>
        <div className="TabTitle">{ item.name }</div>
        { isOpened ?
            <React.Fragment>
                <div className="TabContent">{item.phone}</div>
                <div className="TabContent">{item.company}</div>
                <div className="TabContent">{item.email}</div>
                <div className="TabContent">{item.about}</div>
            </React.Fragment>
                : null
        }
    </li>
);
export  default ListItem;