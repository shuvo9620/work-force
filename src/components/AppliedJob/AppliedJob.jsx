import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakedb';
import { Button, Card } from 'react-bootstrap';
import './AppliedJob.css';

const AppliedJob = () => {
    const [filteredFeatured, setFilteredFeatured] = useState([]);

    const [featuredJob, setFeaturedJob] = useState([]);

    useEffect(() => {
        const fetchFeaturedJob = async () => {
            const response = await fetch('/FeaturedJobs.json');
            const data = await response.json();
            setFeaturedJob(data);
        };
        fetchFeaturedJob();
    }, [featuredJob]);

    useEffect(() => {
        const appliedJob = getShoppingCart();
        let savedAppliedJob = [];
        for (const id in appliedJob) {
            const addedAppliedJob = featuredJob.find(job => job.id === parseInt(id));
            if (addedAppliedJob) {
                savedAppliedJob.push(addedAppliedJob);
            }
        }
        setFeaturedJob(savedAppliedJob);
        setFilteredFeatured(savedAppliedJob);
    }, [featuredJob]);

    const handleOnsiteJob = () => {
        const addedOnsite = featuredJob.filter(job => job.RemoteOrOnsite === 'Onsite');
        setFilteredFeatured(addedOnsite);
    }
    const handleRemoteJob = () => {
        const addedRemote = featuredJob.filter(job => job.RemoteOrOnsite === 'Remote');
        setFilteredFeatured(addedRemote);
    }


    return (
        <div>
            <h2 className='applied-header'>Applied Jobs</h2>
            <div className='btn-onsite position-relative w-75'>
                <div className=' bal position-absolute bottom-0 end-0 d-flex gap-2'>
                    <Button onClick={handleOnsiteJob} variant="primary">Onsite Job</Button>
                    <Button onClick={handleRemoteJob} variant="primary">Remote Job</Button>
                </div>
            </div>
            {
                filteredFeatured.map((featuredJob) => <Card
                    key={featuredJob.id}
                    style={{ width: '50rem', margin: '25px auto', marginBottom: '24px' }}
                >
                    <Card.Body>
                        <div className="row g-0">
                            <div className="applied-logo col-md-2 mt-5">
                                <Card.Img variant="top" src={featuredJob.CompanyLogo} />
                            </div>
                            <div className="col-md-8">
                                <Card.Text>
                                    <h2 className='featured-header'>{featuredJob.JobTitle}</h2>
                                    <p className='company'>{featuredJob.CompanyName}</p>
                                    <div>
                                        <button className='remote-btn'>{featuredJob.RemoteOrOnsite}</button>
                                        <button className='remote-btn'>{featuredJob.Fulltime}</button>
                                    </div>
                                    <div className='applied-location'>
                                        <p><img src="/Icons/Frame-4.png" />
                                            {featuredJob.Location}</p>
                                        <p><img src="/Icons/Frame.png" />
                                            {featuredJob.Salary}</p>
                                    </div>
                                </Card.Text>
                            </div>
                            <div className="col-md-2 mt-5">
                                <Link to={`/featured_details/${featuredJob.id}`}><Button variant="primary">View Details</Button></Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>)

            }

        </div>
    );
};

export default AppliedJob;