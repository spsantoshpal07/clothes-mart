import React from 'react';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

import '../css/signin-and-register.scss';

const SignInAndRegister = () => {
    return (
        <div className='signin-and-register'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndRegister;