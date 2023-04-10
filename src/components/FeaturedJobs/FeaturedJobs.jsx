import React from 'react';
import './FeaturedJobs.css';

const FeaturedJobs = ({ work }) => {
    const { JobTitle, CompanyLogo, CompanyName, RemoteOrOnsite, Location, Salary, Fulltime } = work;
    return (
        <div>
            <img src={CompanyLogo} alt="" />
            <h3>{JobTitle}</h3>
            <p>{CompanyName}</p>
            <div>
                <p>{RemoteOrOnsite}</p>
                <p>{Fulltime}</p>
                <p>{Location}</p>
                <p>{Salary}</p>
                <button>View Details</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;