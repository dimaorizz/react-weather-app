import React from 'react';

const TempInfo = (props) => {
    return (
        <div className='TempInfo'>
            <h2>{props.place}</h2>
            <br />
            <p>{props.temperature} C</p>
        </div>
    )
}

export default TempInfo;