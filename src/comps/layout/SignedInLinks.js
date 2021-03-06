import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction';

const SignInLinks = (props) => {
    return (
        <ul className="right">
            <li>
                <NavLink to="/">Quotes</NavLink>
            </li>
            <li>
                <NavLink to="/create">New Quotes</NavLink>
            </li>
            <li>
                <a href onClick={props.signOut}>Log Out</a>
            </li>
            <li>
                <NavLink to="/" className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignInLinks);