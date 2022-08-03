import React from 'react';
import { backgroundPoints } from '../resources/backgroundPoints';
import '../App.css';

const BackgroundBlock = ({ content, borderColor, marginLeft }) => {
    return (
        <div className='backgroundBlock' style={{ borderColor: `${borderColor}`, marginLeft: marginLeft}}>
            <p>{content}</p>
        </div>
    )
}

const BackgroundContent = () => {
    console.log(backgroundPoints[0]);
    return (
        <div className='backgroundContent'>
            <div className='backgroundHeader'>
                <h2>My Background</h2>
            </div>
            <div className='backgroundBlocksDiv'>
                <BackgroundBlock content={backgroundPoints[0]} borderColor="#f7ed34" marginLeft='0' />
                <BackgroundBlock content={backgroundPoints[1]} borderColor="#f73499" marginLeft='7%' />
                <BackgroundBlock content={backgroundPoints[2]} borderColor="#34f7ac" marginLeft='14%' />
                <BackgroundBlock content={backgroundPoints[3]} borderColor="#34e1f7" marginLeft='21%' />
            </div>
        </div>
    )
}

export default BackgroundContent;