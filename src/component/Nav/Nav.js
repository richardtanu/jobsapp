import React from 'react';
import { Link } from 'react-router-dom';

const nav = (props) => (
    <div>
        <ul>
            <li><button onClick={props.logout}>Logout</button></li>
        </ul>
    </div>
);

export default nav;