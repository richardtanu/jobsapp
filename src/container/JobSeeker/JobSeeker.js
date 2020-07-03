import React , { Component} from 'react';
import AuxWrapper from '../../hoc/auxWrapper';
import axios from 'axios';
import DisplayJob from '../../component/DisplayJob/DisplayJob';
import DisplayJobDetail from '../../component/DisplayJobDetail/DisplayJobDetail';
import { Route, Switch } from 'react-router-dom';
import Search from '../../component/Search/Search';
import Nav from '../../component/Nav/Nav';
class JobSeeker extends Component { 

    state = {
        joblist: {},
        isLogged: false,
        loading: true,
        jobSearch: '',
        locSeach: '',
        fullSearch: false
    }

    componentDidMount() { 
        console.log('job seeker', this.props);
        // const headers = {
        //     // 'Content-Type': 'text/plain',
        //     // 'Access-Control-Allow-Origin': '*',
        //     'Content-Type': 'application/json',
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        //     // 'accept':'application/json'
        // };
        this.fetchData();        
    }
        
    fetchData = () => { 
        const query = '?utf8=✓&description=' + this.state.jobSearch +
                '&location=' + this.state.locSeach + '&full_time=' + this.state.fullSearch;
        if (this.state.fullSearch || this.state.jobSearch !== '' || this.state.locSeach !== '') {
           
            axios.get('/positions'+query, {
                headers: {
                    'Accept': "application/json",
                    'Content-Tye': "application/json",
                    'Access-Control-Allow-Origin': '*',
                }
            })
                .then(res => {
                    console.log('CDM Jobseeker', res.data);
                    this.setState({ joblist: res.data, loading: false });
                })
                .catch(err => {
                    console.log('CDM Jobseeker', err);
                })
        }
        axios.get('/positions.json', {
                headers: {
                    'Accept': "application/json",
                    'Content-Tye': "application/json",
                    'Access-Control-Allow-Origin': '*',
                }
            })
                .then(res => {
                    console.log('CDM Jobseeker', res.data);
                    this.setState({ joblist: res.data, loading: false });
                })
                .catch(err => {
                    console.log('CDM Jobseeker', err);
                })
    }
    componentDidUpdate(prevProps, prevState) { 
        if (this.state.joblist !== prevState.jobList) { 
            return true;
        }
        return false;
    }
    checkboxHandler = (event) => { 
        console.log(this.state.fullSearch);
        this.setState({ fullSearch: event.target.value });
        console.log(event.target.value);
    }
    jobHandler = (event) => { 
        this.setState({ jobSearch: event.target.value });
    }
    locationHandler = (event) => { 
        this.setState({ locSeach: event.target.value });
    }
    // searchTermSubmit = (event) => { 
    //     event.preventDefault();
    // }
    logoutClicked = () => { 
        this.props.history.push('/');
    }
    render() {
        let jobList = <h1>loading...</h1>;
        if (!this.state.loading) {
            jobList = <DisplayJob
                joblist={this.state.joblist}
            />
        }

        return (
            <AuxWrapper>
                <div><Nav logout={this.logoutClicked}/></div>
                <div>
                    {/* <Search /> */}
                    <form onSubmit={this.searchTermSubmit}>
                        <label>Job Description</label>
                        <input type='text' placeholder="Write something" name='' value='' onChange={this.jobHandler}></input>
                        <label>Location</label>
                        <input type='text' placeholder="Your location" name='' value='' onChange={this.locationHandler}></input>
                        <input type='checkbox' defaultChecked={this.state.fullSearch} value={!this.state.fullSearch} onChange={this.checkboxHandler}></input>
                        <label>Full time only</label>
                        <button type="submit">Search</button>
                    </form>
                </div>
                <div>
                    <h1>JOB LIST</h1>
                    {jobList}
                </div>
            </AuxWrapper>
        );
    }
}

export default JobSeeker;