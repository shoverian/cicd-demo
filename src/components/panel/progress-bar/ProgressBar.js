import React from 'react';
import './ProgressBar.css'

const ProgressBar = () => {
    return (
        <div>
    <div className="progress-block">
        <ul className="position">
            <li>About You</li>
            <li>Vehicles</li>
            <li>Drivers</li>
            <li>Coverages</li>
            <li>Quote</li>
        </ul>
    </div>
    <div>
        <hr  style={{
            color: '#ccc',
            backgroundColor: '#ccc',
            height: 1,
            borderColor : '#ccc'
        }}/>
    </div>
    </div>
    );
}
    
export default ProgressBar;