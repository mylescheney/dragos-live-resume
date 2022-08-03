import React from 'react';
import '../App.css';

const Introduction = () => {
    return (
        <div className='introduction'>
            <p className='introMessage'>My name is Miles, but I go by Myles. I'm...</p>
            <div className='skillBlocksDiv'>
                <div className='skillBlock blockA'>
                    <h4>Strongest With</h4>
                    <ul>
                        <li>React.js</li>
                        <li>React Native</li>
                    </ul>
                </div>
                <div className='skillBlock blockB'>
                    <h4>Good With</h4>
                    <ul>
                        <li>Express.js</li>
                        <li>Node.js</li>
                        <li>MongoDB &#38; Mongoose</li>
                        <li>Flutter &#38; Dart</li>
                    </ul>
                </div>
                <div className='skillBlock blockC'>
                    <h4>Knowledgeable Of</h4>
                    <ul>
                        <li>Redux</li>
                        <li>Python</li>
                        <li>SQL</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Introduction;