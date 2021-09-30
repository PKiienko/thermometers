import React from 'react';
import { useState, useEffect } from 'react';

const Thermometer = ({ apiKey, id, active }) => {

    useEffect(() => {fetchTemperature()}, [])

    //last entry channel info
    const [info, setInfo] = useState({});
    
    const fetchTemperature = async () => {
        const response = await fetch(`https://api.thingspeak.com/channels/${apiKey}/fields/1/last.json`);
        const records = await response.json();
        
        setInfo(records);
          
        console.log(records.field1);
        console.log(records.created_at);
    }    

    return (
        <div>
            <div>
                <p key={Math.random()}>{info.field1} {info.created_at}</p>
            </div>
        </div>
    );
}

export default Thermometer;