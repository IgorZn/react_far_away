import React from 'react';
import ClearModal from "./ClearModal";

function Sorting(props) {
    const { sort, setSort, setItems } = props
    const handleSort = (e) => {
      setSort(e.target.value)
    }

    return (
        <>
            <select value={sort} name="sorting" id="sorting" className={"actions py-2 mx-4"} onChange={handleSort}>
                <option value="input">Sort by input</option>
                <option value="description">Sort by description</option>
                <option value="packed">Sort by packed</option>
            </select>
            <ClearModal setItems={setItems}/>
        </>
    );
}

export default Sorting;