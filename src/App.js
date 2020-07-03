import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JobSeeker from './container/JobSeeker/JobSeeker';
import Login from './container/Login/Login';
import DisplayJobDetail from './component/DisplayJobDetail/DisplayJobDetail'
import AuxWrapper from './hoc/auxWrapper';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
class App extends Component {
  // componentDidMount() { 
  //       // const headers = {
  //       //     // 'Content-Type': 'text/plain',
  //       //     // 'Access-Control-Allow-Origin': '*',
  //       //     'Content-Type': 'application/json',
  //       //     'Access-Control-Allow-Origin': '*',
  //       //     'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  //       //     // 'accept':'application/json'
  //       // };
  //       axios.get('/positions.json', {
  //           headers: {
  //               'Accept': "application/json",
  //               'Content-Tye': "application/json",
  //               'Access-Control-Allow-Origin': '*',
  //           }
  //       })
  //       .then(res => { 
  //               console.log('CDM app',res);
  //       })
  //       .catch(err => { 
  //               console.log('CDM app',err);
  //       })
    // }
  render() {
    return (
      <AuxWrapper>
        {/* <JobSeeker /> */}
        {/* <Login /> */}
        <Switch>
          <Route exact path="/jobseeker/positions/:id" component={DisplayJobDetail} />
          <Route path="/jobseeker" component={JobSeeker} />
          
          <Route exact path="/" component={Login}/>
          <Route render={() =>(<h1>404 Not found.</h1>)}/>
        </Switch>
      </AuxWrapper>

      
    );
  }
}
export default App;
