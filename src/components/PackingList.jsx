import React, {useState} from 'react';
import {createInitialItems} from "../fakeData";
import Sorting from "./Sorting";


function PackingList(props) {
    const {items, setItems} = props
    const [sortBy, setSortBy] = useState('input');

    let sortedItems

    if(sortBy === 'input') sortedItems = items

    if(sortBy === 'description') sortedItems = items
        .slice()
        .sort((a,b) => a.text.localeCompare(b.text))

    if(sortBy === 'packed') sortedItems = items
        .slice()
        .sort((a,b) => Number(a.packed) - Number(b.packed))

    const handleDeleteItem = (id) => () => {
        setItems(items => items.filter(item => item.id !== id))
    }

    const handlePackedStatus = (id) => () => {
        setItems(items => items.map(item => {
            if (item.id !== id) return item
            return {
                ...item,
                packed: !item.packed
            }
        }))
    }


    return (
        <div className={"row"}>
            <div className="col">
                <div className="list">
                    <ul>
                        {sortedItems.map(item => (
                            <li key={item.id}>
                                <input type="checkbox" checked={item.packed ? true : false} className="status"
                                       name="status"
                                       onChange={handlePackedStatus(item.id)}/>
                                <span style={item.packed ? {textDecoration: "line-through"} : {}}>
                                    {item.qty} {item.text}
                                </span>
                                <button onClick={handleDeleteItem(item.id)}>❌</button>
                            </li>
                        ))}
                    </ul>
                    <div className={"sort"}>
                        <Sorting sort={sortBy} setSort={setSortBy}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PackingList;