import React from 'react';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/crown.svg';
import CartIcon from '../components/Cart-Icon';

import { auth } from '../firebase/firebase.utils';

import '../css/header.scss';
import { connect } from 'react-redux';
import ViewCart from './ViewCart';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {
                    currentUser ?
                    <div className='option' onClick={ () => auth.signOut()}>SIGN OUT</div>
                    : <Link className='option' to='/signin&register'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {
            hidden ? null : <ViewCart />
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser,
        hidden: state.viewCart.hidden
    }
}

export default connect(mapStateToProps)(Header);