import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './comps/auth/SignIn';
import SignUp from './comps/auth/SignUp';
import Dashboard from './comps/dashboard/Dashboard';
import Navbar from './comps/layout/Navbar';
import ProjectDetail from './comps/projects/ProjectDetail';
import CreateProject from './comps/projects/CreateProject';
import LandingPage from './comps/landing/LandingPage';

class App extends Component {
  render(){ 
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/home' component={LandingPage} />
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetail} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
