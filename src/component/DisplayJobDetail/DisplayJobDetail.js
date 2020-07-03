import React, { Component } from 'react';
import { Link, withRouter  } from 'react-router-dom';
import Classes from './DisplayJobDetail.module.css';
import axios from 'axios';
import Logo from '../../logo.jpg'
class displayJobDetail extends Component{

    state = {
        jobdetail: {},
        loading: true
    }
    handleClick = () => { 
        this.props.history.push('/jobseeker')
    }

    componentDidMount() { 
        console.log('id', this.props.match.params);
        axios.get('/positions/'+this.props.match.params.id+'.json', {
            headers: {
                'Accept': "application/json",
                'Content-Tye': "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        })
        .then(res => { 
            console.log('CDM detail job display', res.data);
            this.setState({ jobdetail: res.data, loading: false });
        })
        .catch(err => { 
            console.log('CDM detail job display',err);
        })
    }
    render() {
        // const parser = new DOMParser().parseFromString(this.state.jobdetail.description, 'text/htlm');
        return (
            <div className={Classes.DisplayJobDetail}>
                <button className={Classes.Button}onClick={this.handleClick}>Back</button>
                <div className={Classes.ContentWrapper}>
                    <div className={Classes.Content} >
                        <span>{this.state.jobdetail.type}/{this.state.jobdetail.location}</span>
                        <h2>{this.state.jobdetail.company}</h2>
                        <hr />
                        {this.state.jobdetail.description}
                    </div>
                    <div className={Classes.Content1} >
                        <img src={Logo}></img>
                        <span>{this.state.jobdetail.copmany_url}</span>
                        <div>
                            <p>How to apply?</p>
                            <span>{this.state.jobdetail.how_to_apply}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
};
export default withRouter(displayJobDetail);