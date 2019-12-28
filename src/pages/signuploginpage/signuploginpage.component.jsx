import React from 'react';

import './signuploginpage.styles.scss';

import CustomButton from '../../components/custom-button/custom-button.component';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignupLoginPage = () => (
    <div className="signup-login-page">
        <h1 className="page-title">Signup / Login</h1>
        <div>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
        </div>
        <div className="login-signup">
            <SignIn />
            <SignUp />
        </div>
    </div>
)

export default SignupLoginPage;