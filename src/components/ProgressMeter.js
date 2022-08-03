import React, { useState } from "react";
import '../App.css';

const ColorButton = ({ color, setColor, selectedColor }) => {

    let selectedClass = 'colorUnselected';
    if (color === selectedColor) {
        selectedClass = 'colorSelected';
    }

    return (
        <div
            className={`colorButton ${selectedClass}`}
            style={{ backgroundColor: color }}
            onClick={() => setColor(color)}
        />
    )
}

const ProgressMeter = () => {

    const [count, setCount] = useState(0);
    const [max, setMax] = useState(25);
    const [color, setColor] = useState('#34e1f7')

    let progress = count / max;

    return (
        <div className="projectDiv">
            <h5>Progress Bar</h5>
            <div className='sampleBlock progressMeterBlock'>
                <h6 className="counter">{count} / {max}</h6>
                <div className='progressMeter'>
                    <div
                        className='progress'
                        style={{ backgroundColor: color, width: `${progress * 100}%` }}
                    />
                </div>
                <div className='colorSelector'>
                    <ColorButton color='#34e1f7' setColor={setColor} selectedColor={color} />
                    <ColorButton color='#34f7ac' setColor={setColor} selectedColor={color} />
                    <ColorButton color='#f73499' setColor={setColor} selectedColor={color} />
                    <ColorButton color='#f7ed34' setColor={setColor} selectedColor={color} />
                    <ColorButton color='#b73deb' setColor={setColor} selectedColor={color} />
                </div>
                <div className='progressMeterButtonsDiv'>
                    <div
                        className='progressMeterButton'
                        onClick={() => {
                            if (count > 0) {
                                setCount(count - 1);
                            }
                        }}
                    >
                        -
                    </div>
                    <div
                        className='progressMeterButton'
                        onClick={() => {
                            if (count < max) {
                                setCount(count + 1);
                            }
                        }}
                    >
                        +
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressMeter;