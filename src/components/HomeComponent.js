import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class HomeComponent extends Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <Link  to={"/login"} ><button className="btn btn-primary  btn-block">Login</button></Link>
                    <Link  to={"/register"} ><button className="btn btn-warning btn-block">Register</button></Link>
                </div>
                
                {/* <button className="btn btn-warning btn-block">SignUp</button> */}
            </div>
        )
    }
}

export default HomeComponent
