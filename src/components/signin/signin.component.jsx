import React from 'react';

import './signin.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: "", password: "" })
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

export default SignIn;