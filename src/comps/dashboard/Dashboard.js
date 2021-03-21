import React, { Component } from 'react';
import Notification from './Notification';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render(){
        // console.log(this.props)
        const { projects, auth } = this.props;
        if(!auth.uid) return <Redirect to="/home" />

        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m12">
                        <ProjectList  projects={projects}/>
                    </div>
                    {/* <div className="col s12 m5 offset-ml">
                        <Notification />
                    </div> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
        firestoreConnect([
            { collection: 'projects' }
        ])
)(Dashboard);