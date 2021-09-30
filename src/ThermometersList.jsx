import React from 'react';
import Thermometer from './Thermometer';

const ThermometersList = ({ apiKeys }) => {

    // console.log(apiKeys);

    return (
        <div className='thermometers-container'>
            <ul className='thermometers-list'>
                {apiKeys.map((apiKey) => (
                    <Thermometer key={apiKey.id} apiKey={apiKey.readKey} id={apiKey.id} active={apiKey.active}/>
                ))}
            </ul>
        </div>
    )
}

export default ThermometersList;