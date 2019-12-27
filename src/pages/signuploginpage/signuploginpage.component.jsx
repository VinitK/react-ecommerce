import React from 'react';

import './signuploginpage.styles.scss';

import SignIn from '../../components/signin/signin.component';

const SignupLoginPage = () => (
    <div className="signup-login-page">
        <h1 className="page-title">Signup / Login</h1>
        <SignIn />
    </div>
)

export default SignupLoginPage;