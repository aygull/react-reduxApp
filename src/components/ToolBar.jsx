import React from 'react';
import '../index.css'


const sortings = [
    { name: 'Name', key: 'name' },
    { name: 'Phone', key: 'phone' },
    { name: 'Email', key: 'email' },
    { name: 'Company', key: 'company'},
];

const ToolBar = ({ sortingKey, onChange, toggleSortKey, removeSort, removeFilter, value, isToggle, setFlag }) => (
    <div>
        { sortings.map(item =><button  onClick={toggleSortKey(item.key)}
                                       className={sortingKey === item.key?"buttonFat":"button"} >{item.name} </button>)}
        <button onClick={removeSort()} className="button"> Сброс сортировки</button>
        <input type="text" className="inputClass" onChange={evnt => onChange(evnt.target.value)} value = {value} />
        <button onClick={removeFilter()}  className="button"> Сброс фильтра</button>
    </div>

);
export  default ToolBar;