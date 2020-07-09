import React from 'react';

const TempInfo = (props) => {
    if(props.forecast === null) {
        return(
            <div className='tempCard'>
                <p>Input place to get a forecast</p>
            </div>
        )
    }
    return (
        <div className='tempCard'>
            <h2>{props.place}</h2>
            <br />
            <p>Temperature: {props.forecast.temperature} &#8451;</p>
            <p>Summary: {props.forecast.summary}</p>
            <p>Wind speed: {props.forecast.windSpeed} meters per second</p>
        </div>
    )
}

export default TempInfo;