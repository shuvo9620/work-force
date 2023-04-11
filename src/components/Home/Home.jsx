import React, { useEffect, useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import JobsCategory from '../JobsCategory/JobsCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
const Home = () => {

    const [jobsCategory, setJobsCategory] = useState([]);

    useEffect(() => {
        fetch('/jobsCategoryList.json')
            .then(res => res.json())
            .then(data => setJobsCategory(data))
    }, [])

    const featuredJob = useLoaderData();

    const [featured, setFeatured] = useState(featuredJob);
    const [showAllFeature, setShowAllFeature] = useState(false);

    const sliceFeaturedJob = showAllFeature ? featured : featured.slice(0, 4);

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

            <div className='jobs-cat'>
                <h2>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div>
                <div className='featured-jobs-data'>
                    {
                        sliceFeaturedJob.map(work => <FeaturedJobs
                            key={work.id}
                            work={work}
                        ></FeaturedJobs>)
                    }
                </div>
            </div>
            <div className='btn-see-all'>
                {
                    !showAllFeature && (
                        <button className='banner-btn' onClick={() => setShowAllFeature(true)} >See All Jobs</button>
                    )
                }
            </div>
        </div>
    );
};

export default Home;