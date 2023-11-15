import React, {useState} from 'react';

function Form(props) {
    const {setItems} = props
    const [description, setDescription] = useState('');
    const [qty, setQty] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault()
        const newItem = {
            id: Date.now(),
            text: description || "None",
            qty: qty,
            packed: false,
        }

        setItems(items => [...items, newItem])
    }

    return (
        <>
            <form className={"add-form"} onSubmit={handleSubmit}>
                <h3>What do you need for your 😍 trip</h3>
                <select name="" id="" value={qty} onChange={(event => setQty(Number(event.target.value)))}>
                    {Array.from({length: 20}, (_, i) => i + 1).map(num => (
                        <option value={num} key={num}>{num}</option>
                    ))}
                </select>
                <input type="text" placeholder={"Item..."} onChange={(event => setDescription(event.target.value)
                )}/>
                <button>Add</button>
            </form>
        </>
    );
}

export default Form;