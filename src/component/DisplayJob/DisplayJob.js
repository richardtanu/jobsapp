import React from 'react';
import SingleJob from './SingleJob/SingleJob';
import {Link } from 'react-router-dom';

const displayJob = (props) => {
    console.log('display job',props);
    let keyJob = Object.keys(props.joblist).map(key => {
        return [...Array(props.joblist[key])].map((job, i) => {
            return (
                // <Link to={"/positions/"+job.id+".json"}>
                    <SingleJob id={job.id} title={job.title} company={job.company} type={job.type} />
                // </Link>
            );
        });
    });
    return (
        <div>
            {keyJob}
        </div>
    );
};

export default displayJob;