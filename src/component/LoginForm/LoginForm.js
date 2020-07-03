import React from 'react';
import Classes from './Login.module.css';
const loginForm = (props) => (
    <div className={Classes.LoginForm}>
        <form onSubmit={props.onSubmit}>
            <input type='text' placeholder='username' name='username'/>
            <input type='password'  placeholder='password' name='password'/>
            <button>Login</button>
        </form>
    </div>
);

export default loginForm;