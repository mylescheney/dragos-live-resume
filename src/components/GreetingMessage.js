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
            <p className='greetingDisclaimer fadesIn'>That was a guess, but if your name is {name.substring(0, name.length - 1)} that was pretty cool, right?</p>
        </div>
    )
}

const GreetingBanner = () => {
    return (
        <div className='periBanner'>
            <div className='banner'>
                <GreetingMessage />
            </div>
        </div>
    );
}

export default GreetingBanner;