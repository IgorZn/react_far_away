import React from 'react';

function Sorting(props) {
    const { sort, setSort } = props
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
            <button className={"py-2"}>Clear</button>
        </>
    );
}

export default Sorting;