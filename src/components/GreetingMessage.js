import React, { useState, useEffect } from 'react';
import '../App.css';
import typeEffect from '../resources/typeEffect';

const GreetingMessage = () => {

    const [name, setName] = useState('');

    useEffect(() => {
        typeEffect(setName);
    }, [])
    
    return (
        <div className='greetingMessage fadeIn'>
            <p className='mainGreeting' id='name'>Greetings, {name}</p>
            <p className='greetingDisclaimer fadesIn'>That was a guess, but if your name is {name} that was pretty cool, right?</p>
        </div>
    )
}

export default GreetingMessage;