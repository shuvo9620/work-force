import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';

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
                    <div>
                        <p>Job Description:{jobToDisplay.JobTitle}</p>
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
