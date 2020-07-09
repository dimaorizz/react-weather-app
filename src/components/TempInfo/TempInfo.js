import React from 'react';

const TempInfo = (props) => {
    if(props.temperature === null) {
        return(
            <div className='errorTemp'>
                <p>Input place to get a forecast</p>
            </div>
        )
    }
    return (
        <div className='tempInfo'>
            <h2>{props.place}</h2>
            <br />
            <p>{props.temperature} C</p>
        </div>
    )
}

export default TempInfo;