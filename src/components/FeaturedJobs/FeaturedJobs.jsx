import React from 'react';
import './FeaturedJobs.css';
import { Link } from 'react-router-dom';

const FeaturedJobs = ({ work }) => {
    const { id, JobTitle, CompanyLogo, CompanyName, RemoteOrOnsite, Location, Salary, Fulltime } = work;
    return (
        <div className='all-job'>
            <img src={CompanyLogo} alt="" />
            <h3>{JobTitle}</h3>
            <p className='company'>{CompanyName}</p>
            <div className='job-des'>
                <p>{RemoteOrOnsite}</p>
                <p>{Fulltime}</p>
            </div>
            <div className='job-des2'>
                <img src="Icons/Location Icon.png" alt="" />
                <p>{Location}</p>
                <img src="Icons/Frame.png" alt="" />
                <p>Salary: {Salary}</p>
            </div>
            <Link to={`/featured_details/${id}`} className='btn-details'>View Details</Link>
        </div>
    );
};

export default FeaturedJobs;