import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignedInLinks';
import SignOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <SignInLinks profile={profile} /> : <SignOutLinks />;
    return (
        <div className="navbar-fixed">
            <nav className="nav-wraper grey darken-3">
                <div className="container">
                <Link to="/" className="left brand-logo">Quoties</Link>
                { links }
                </div>
            </nav>
        </div>
        
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);