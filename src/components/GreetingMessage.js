import React, { useState, useEffect } from 'react';
import '../App.css';
import typeEffect from '../resources/typeEffect';
import getRandomName from '../resources/names';

const GreetingMessage = () => {

    const [name, setName] = useState(getRandomName);
    const [nameSpelled, setNameSpelled] = useState('');

    useEffect(() => {
        typeEffect(name, setNameSpelled);
    }, [])

    return (
        <div className='greetingMessage fadeIn'>
            <p className='mainGreeting' id='name'>Greetings, {nameSpelled}</p>
            <p className='greetingDisclaimer fadesIn'>That was a guess, but if your name is {name} that was pretty cool, right?</p>
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