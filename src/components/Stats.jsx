import React from 'react';

function Stats(props) {
    return (
        <div className={"stats"}>
            <footer>
                <em>💼 You have X items on your list, and you already packed X (x%)</em>
            </footer>
        </div>

    );
}

export default Stats;