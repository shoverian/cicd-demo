import React from 'react';
import './Panel.css'
import ProgressBar from './progress-bar/ProgressBar';

const Panel = () => {
    return (
    <div className="panel">
        <ProgressBar />
        <form id="main" className="form-container">
            <div class="form-group col-12">
                <label htmlFor="firstName">First Name</label>
                <input autocomplete="given-name" type="text" class="form-control" id="firstName" name="firstName" />
            </div>
            <div class="form-group col-12">
                <label htmlFor="lastName">Last Name</label>
                <input autocomplete="family-name" type="text" class="form-control" id="lastName" name="lastName" />
            </div>
            <div class="form-group col-4">
                <label htmlFor="suffix">Suffix</label>
                <input autocomplete="honorific-suffix" type="text" class="form-control" id="suffix" name="suffix" />
            </div>
            <div class="form-group col-5">
                <label htmlFor="suffix">Date of Birth</label>
                <input autocomplete="bday" type="text" class="form-control" id="dob" name="dob" />
            </div>
            <button className="btn btn-secondary next">Next</button>
        </form>
    </div>
    );
}
    
export default Panel;