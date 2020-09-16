import React from 'react';

import FormInput from '../components/FormInput';
import CustomButton from './CustomButton';

import '../css/signin.scss';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }

    onFormFieldChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    render () {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.onFormSubmit}>
                    <FormInput onFormFieldChange={this.onFormFieldChange} 
                        name='email' 
                        type='email' 
                        label='Email'
                        value={this.state.email} 
                        required />
                    <FormInput onFormFieldChange={this.onFormFieldChange} 
                        name='password' 
                        type='password' 
                        label='Password'
                        value={this.state.password} 
                        required />

                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;