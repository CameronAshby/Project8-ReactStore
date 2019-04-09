import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import {Link} from "react-router-dom";

import store from './Store';

import '../CSS/loginPage.css';

class LoginPage extends Component {
    state = {
        username: '',
        password: ''
    };

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value,
        })
    };

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value,
        })
    };

    handleSubmit = () => {
        store.dispatch({
            type: 'USER_SIGNIN',
            username: this.state.username,
            password: this.state.password
        });
        this.setState({
            username: '',
            password: ''
        });
    };

    render() {
        return(
            <div className='loginContainer'>
                <h2>Login</h2>
                <Input onChange={this.onChangeUsername} value={this.state.username} className='input' placeholder='Username' type='text'/>
                <Input onChange={this.onChangePassword} value={this.state.password} className='input' placeholder='Password' type='password'/>
                <Button variant="contained" size="small" color="primary" onClick={this.handleSubmit}> <Link to='/productList' className='item cardButton'>Login</Link> </Button>
            </div>
        );
    }
}

export default LoginPage;
