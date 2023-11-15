import React, {useState} from 'react';
import {createInitialItems} from "../fakeData";


function PackingList(props) {
    const {items, setItems} = props

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
        console.log(items)
    }


    return (
        <div className={"row"}>
            <div className="col">
                <div className="list">
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                <input type="checkbox" checked={item.packed ? true : false} className="status" name="status"
                                       onChange={handlePackedStatus(item.id)}/>
                                <span style={item.packed ? {textDecoration: "line-through"} : {}}>
                                    {item.qty} {item.text}
                                </span>
                                <button onClick={handleDeleteItem(item.id)}>❌</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PackingList;