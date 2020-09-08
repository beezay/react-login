import React, { Component } from 'react'
import {BrowserRouter as  Link} from 'react-router-dom'


class HomeComponent extends Component {
    render() {
        return (
            <div className="nav-item">
                <Link className="nav-link" to={"/login"} ><button className="btn btn-primary  btn-block">Login</button></Link>
                <Link className="nav-link" to={"/register"} ><button className="btn btn-warning btn-block">Register</button></Link>
                {/* <button className="btn btn-warning btn-block">SignUp</button> */}
            </div>
        )
    }
}

export default HomeComponent
