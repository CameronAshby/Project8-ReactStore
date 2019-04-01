import React, {Component} from 'react';

class LoginPage extends Component {
    render() {
        return(
            <div>
                LoginPage
                <input placeholder='Username' type='text'/>
                <input placeholder='Password' type='password'/>
                <button>Login</button>
            </div>
        );
    }
}

export default LoginPage;
