import React from 'react';

const JobsCategory = ({job}) => {
    const {logo, name, jobsAvailable} = job;
    return (
        <div>
            <img src={logo} alt="" />
            <h4>{name}</h4>
            <p>{jobsAvailable}</p>
        </div>
    );
};

export default JobsCategory;