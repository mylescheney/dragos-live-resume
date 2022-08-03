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
                <div className='projectBlock'>
                    <ProgressMeter />
                </div>
                <div className='projectBlock'>
                    <h5>Search Bar</h5>
                    <div className='sampleBlock searchBarBlock'>

                    </div>
                </div>
                <div className='projectBlock'>
                    <h5>Calendar</h5>
                    <div className='sampleBlock calendarBlock'>

                    </div>
                </div>
            </div>
            <p>All Made with React.js</p>
        </div>
    )
}

export default SamplesContent;