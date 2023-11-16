import React from 'react';

function Stats(props) {
    const { items } = props

    if(!items.length)
        return (
            <p className={"stats"}>
                <em className={"display-5"}>Start adding items to your packing list 🚀</em>
            </p>
        )

    const getPackedPercent = () => {
        const packed = items.filter(item => item.packed === true)
        const percents = packed.length / items.length  * 100
        return Math.floor(percents)
    }

    const packed = items.filter(item => item.packed === true)

    return (
        <div className={"stats"}>
            <footer>
                <em>{getPackedPercent() === 100 ? 'You got everything to go ✈️' :
                `💼 You have ${items.length} items on your list, and you already packed ${packed.length} (${getPackedPercent()}%)`}
                </em>
            </footer>
        </div>

    );
}

export default Stats;