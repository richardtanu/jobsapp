import React from 'react';

const search = (props) => (
    <div>
        <form onSubmit={props.searchTermSubmit}>
            <label>Job Description</label>
            <input type='text' placeholder="Write something" name='' value=''></input>
            <label>Location</label>
            <input type='text' placeholder="Prefer location" name='' value=''></input>
            <input type='checkbox'></input>
            <label>Full time only</label>
            <button type="submit">Search</button>
        </form>
    </div>
);

export default search;