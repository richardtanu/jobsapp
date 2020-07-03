import React, { Component} from 'react';
import LoginForm from '../../component/LoginForm/LoginForm';
import AuxWrapper from '../../hoc/auxWrapper';
import JobSeeker from '../JobSeeker/JobSeeker';
import { Route, Switch } from 'react-router-dom';
class Login extends Component { 

    state = {
        loginData: {},
        isLogged: false,
        username: 'test',
        password: 'test'
    }

    handleSubmit = (event) => { 
        event.preventDefault();
        console.log(event.target.username.value);
        console.log(event.target.password.value);

        if (event.target.username.value === this.state.username && event.target.password.value === this.state.password) { 
            this.props.history.push('/jobseeker');
        }
    }

   
    render() {
        return (
            <div>
                {/* <LoginForm onSubmit={this.handleSubmit} /> */}
                 <form onSubmit={(event) => this.handleSubmit(event) }>
                    <input type='text' placeholder='username' name='username'/>
                    <input type='password'  placeholder='password' name='password'/>
                    <button type='submit'>Login</button>
                </form>
                {/* <Route exact path="/jobseeker" component={JobSeeker} /> */}
            </div>
        );
    }
}

export default Login;