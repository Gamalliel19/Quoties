import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return(
        <div className="container">
            <div className="col">
                <h1>
                    Share your favorite quotes or <br></br>
                    make your own quotes and <br></br>share it in here.
                </h1>
                <Link to="/signin" class="waves-effect waves-light pink lighten-1 btn-large">Sign in</Link>
            </div>
            
        </div>
    )
}

export default LandingPage;