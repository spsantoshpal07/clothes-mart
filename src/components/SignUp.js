import React from 'react';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import CustomButton from './CustomButton';
import FormInput from './FormInput';

import '../css/signup.scss';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    onSignUpSubmit = async event => {
        event.preventDefault();

        const { displayName } = this.state;

        if(this.state.password !== this.state.confirmPassword) {
            alert("Password and Confirm Password Fields should match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(this.state.email, this.state.password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch(error) {
            console.error(error);
        }
    }

    onFormFieldChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.onSignUpSubmit}>
                    <FormInput onFormFieldChange={this.onFormFieldChange}
                        type='text'
                        name='displayName'
                        value={this.state.displayName}
                        label='Display Name'
                        required
                    />
                    <FormInput onFormFieldChange={this.onFormFieldChange}
                        type='email'
                        name='email'
                        value={this.state.email}
                        label='Email'
                        required
                    />
                    <FormInput onFormFieldChange={this.onFormFieldChange}
                        type='password'
                        name='password'
                        value={this.state.password}
                        label='Password'
                        required
                    />
                    <FormInput onFormFieldChange={this.onFormFieldChange}
                        type='password'
                        name='confirmPassword'
                        value={this.state.confirmPassword}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;