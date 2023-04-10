import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import JobsCategory from '../JobsCategory/JobsCategory';
const Home = () => {
    const jobsCategory = useLoaderData();
    return (
        <div>
            <div className='banner-section'>
                <div className='text-area'>
                    <div className='banner-text'>
                        <h2>One Step <br /> Closer To Your <span className='color-text'>Dream Job</span></h2>
                        <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                        <button className='banner-btn'>Get Started</button>
                    </div>
                </div>
                <div className='banner-img'>
                    <img src="All Images/man.png" alt="" />
                </div>
            </div>

            <div className='jobs-cat'>
                <h2>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='jobs-data'>
                    {
                        jobsCategory.map(job => <JobsCategory
                            key={job.id}
                            job={job}
                        ></JobsCategory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;