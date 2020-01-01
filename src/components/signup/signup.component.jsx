import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './signup.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Confirm Password doesn't match password.");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password); // creating user with email and password
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            });
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-up">
                <h2>New User</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={this.state.displayName} required handleChange={this.handleChange} label="Display Name" />
                    <FormInput type="email" name="email" value={this.state.email} required handleChange={this.handleChange} label="Email" />
                    <FormInput type="password" name="password" value={this.state.password} required handleChange={this.handleChange} label="Password" />
                    <FormInput type="password" name="confirmPassword" value={this.state.confirmPassword} required handleChange={this.handleChange} label="Confirm Password" />
                    <CustomButton type="submit">Signup</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;