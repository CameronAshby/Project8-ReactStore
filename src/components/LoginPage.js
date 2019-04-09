import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import '../CSS/loginPage.css';

class LoginPage extends Component {
    state = {
        username: '',
        password: ''
    };

    onChangeUsername = (e) => {
        console.log(this.state.username);
        this.setState({
            username: e.target.value,
        })
    };

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value,
        })
    };

    handleSubmit() {

    }

    render() {
        return(
            <div className='loginContainer'>
                <h2>Login</h2>
                <Input onChange={this.onChangeUsername} value={this.state.username} className='input' placeholder='Username' type='text'/>
                <Input onChange={this.onChangePassword} value={this.state.password} className='input' placeholder='Password' type='password'/>
                <Button variant="contained" size="small" color="primary" onClick={this.handleSubmit()}>Login</Button>
            </div>
        );
    }
}

export default LoginPage;
