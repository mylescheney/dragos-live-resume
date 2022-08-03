import React from 'react';
import '../App.css';

// Components
import ProgressMeter from './ProgressMeter';

const SamplesContent = () => {
    return (
        <div className='samplesContent'>
            <div className='samplesHeader'>
                <h2>Free Samples</h2>
            </div>
            <div className='sampleBlocksDiv'>
                <ProgressMeter />
                <div className='sampleBlock searchBarBlock'>

                </div>
                <div className='sampleBlock calendarBlock'>

                </div>
            </div>
            <p>All Made with React.js</p>
        </div>
    )
}

export default SamplesContent;