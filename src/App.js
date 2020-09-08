import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

// Import Components Here
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import DashboardComponent from './components/DashboardComponent';

function App() {
  return (

    <Router>
      <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <Link className="navbar-brand" to={"/"}>Project 1</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/login"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/register"}>Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route path="/login" component={LoginComponent} />
                <Route path="/register" component={RegisterComponent} />
                <Route path="/dashboard" component={DashboardComponent} />
              </Switch>
          {/* <div className="auth-wrapper">
            <div className="auth-inner">
              {/* <button className="nav-item"> <Link className="nav-link" to={"/login"} >Login</Link></button> *
              <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route path="/login" component={LoginComponent} />
                <Route path="/register" component={RegisterComponent} />
                <Route path="/dashboard" component={DashboardComponent} />
              </Switch>
            </div>
          </div> */}
        {/* <h1>Welcome to the Login Project</h1>
        <LoginComponent/>
        <RegisterComponent/> */}
      </div>

    </Router>
    
  );
}

export default App;
