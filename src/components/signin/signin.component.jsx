import React from 'react';

import './signin.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth } from '../../firebase/firebase.utils';

import { withRouter } from 'react-router-dom';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: "", password: "" });
            this.props.history.push('/'); // this.props.history is used by including withRouter and passing Component through it at the end.

        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>Existing User</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} required handleChange={this.handleChange} label="Email" />
                    <FormInput type="password" name="password" value={this.state.password} required handleChange={this.handleChange} label="Password" />
                    <CustomButton type="submit">Login</CustomButton>
                </form>
            </div>
        )
    }
}

export default withRouter(SignIn);