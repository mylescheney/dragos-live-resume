import React from 'react';
import '../App.css';

// Components
import ProgressMeter from './ProgressMeter';
import SearchBar from './SearchBar';
import Calendar from './Calendar';

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
                    <SearchBar />
                </div>
                <div className='projectBlock'>
                    <Calendar />
                </div>
            </div>
            <p>All Made with React.js</p>
        </div>
    )
}

export default SamplesContent;