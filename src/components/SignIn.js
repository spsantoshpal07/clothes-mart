import React from 'react';

import FormInput from '../components/FormInput';
import CustomButton from './CustomButton';

import { auth, signInWithGoogle } from '../firebase/firebase.utils';

import '../css/signin.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onFormSubmit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
            
            this.setState({
                email: '',
                password: ''
            })
        } catch(error) {
            alert('Invalid UserName or Password');
        }
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
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;