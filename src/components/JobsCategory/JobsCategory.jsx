import React from 'react';
import './JobsCategory.css'

const JobsCategory = ({job}) => {
    const {logo, name, jobsAvailable} = job;
    return (
        <div className='jobs-all-data'>
            <img src={logo} alt="" />
            <h4>{name}</h4>
            <p>{jobsAvailable}</p>
        </div>
    );
};

export default JobsCategory;