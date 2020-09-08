import React, { Component } from 'react'
import auth from './auth'

class LoginComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    login(){
        
      auth.login(()=>{
          this.props.history.push('/dashboard')
      })
    }

    // function handleSubmit(e){
    //     e.preventDefault();
    // }
    
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                <form>
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email"
                            onChange={(e)=>this.setState({email:e.target.value})} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password"
                            onChange={(e)=>this.setState({password:e.target.value})} />
                        </div>


                        <button type="submit" className="btn btn-primary btn-block" onClick={()=>this.login()} >Submit</button>
                        <p className="forgot-password text-right">
                            Not Registered <a href="/register">SignUp?</a>
                        </p>
                    </form>
                </div>

            </div>
        )
    }
}

export default LoginComponent
