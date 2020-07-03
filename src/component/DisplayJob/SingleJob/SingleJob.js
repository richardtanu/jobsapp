import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const singleJob = (props) => {
    // console.log('single job', props);
    return (
        <div key={props.id}>
            <Link to={"/jobseeker/positions/" + props.id}>
            {/* <Link to={{
                pathname: '/jobseeker/positions' ,
                search: '?id='+props.id
            }}> */}
                <h5>{props.title}</h5>
            </Link>
            <p><span>{props.company}</span> - <strong>{props.type}</strong></p>
        </div>
    );
};

export default withRouter(singleJob);