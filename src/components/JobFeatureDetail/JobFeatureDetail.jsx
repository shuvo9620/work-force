import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';
import './JobFeatureDetail.css'

const JobFeaturedDetail = () => {
    const { id } = useParams();
    const [featuredData, setFeaturedData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchFeaturedData = async () => {
            try {
                const response = await fetch('/FeaturedJobs.json');
                const data = await response.json();
                setFeaturedData(data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchFeaturedData();
    }, [id]);

    const jobToDisplay = featuredData && featuredData.length > 0 && featuredData.find(job => job.id === parseInt(id));


    const handleApplyJob = id => {
        addToDb(id);
    }

    return (
        <div>
            {isLoading ? (
                <p>Loading job details...</p>
            ) : jobToDisplay ? (
                <div>
                    <div className='job-header'>
                        <h2>Job Details</h2>
                    </div>
                    <div className='job-details'>
                        <div>
                            <p><strong>Job Description:</strong> {jobToDisplay.JobDescription}</p>
                            <p><strong>Job Responsibility:</strong> {jobToDisplay.JobResponsibility}</p>
                            <p><strong>Educational Requirements:</strong> {jobToDisplay.EducationalRequirements}</p>
                            <p><strong>Experiences:</strong> {jobToDisplay.Experiences}</p>
                        </div>

                        <div className='job-two card p-4 w-75'>
                            <div>
                                <h3>Job Details</h3>
                                <p><img src="/Icons/Frame.png" />
                                    <strong>Salary: </strong>{jobToDisplay.Salary}</p>
                                <p> <img src="/Icons/Frame-1.png" />
                                    <strong>Job Title: </strong>{jobToDisplay.JobTitle}</p>
                                <h3>Contact Info</h3>
                                <p> <img src="/Icons/Frame-2.png" />
                                    <strong>Phone: </strong>{jobToDisplay.phone}</p>
                                <p> <img src="/Icons/Frame-3.png" />
                                    <strong>Email: </strong>{jobToDisplay.email}</p>
                                <p><strong> <img src="/Icons/Frame-4.png" />
                                    Address: </strong>{jobToDisplay.Location}</p>
                            </div>
                            <button onClick={() => handleApplyJob(id)} className='button-apply'>Apply job</button>
                        </div>

                    </div>
                </div>
            ) : featuredData.length > 0 ? (
                <p>No job found with ID {id}</p>
            ) : (
                <p>Loading job details...</p>
            )}
        </div>
    );
};

export default JobFeaturedDetail;
