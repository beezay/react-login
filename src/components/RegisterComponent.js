import React, { Component } from 'react'
import { Router } from 'react-router-dom';

class RegisterComponent extends Component {

    userData;
    

    constructor(props) {
        super(props)
    
        this.state = {
             first_name: '',
             last_name: '',
             email: '',
             password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    //React Life Cycle
    componentDidMount(){
        this.userData = JSON.parse(sessionStorage.getItem('user'))

        if(sessionStorage.getItem('user')){
            this.setState({
                first_name: this.userData.first_name,
                last_name: this.userData.last_name,
                email: this.userData.email,
                password: this.userData.password
            })
        }else{
            this.setState({
                first_name: '',
                last_name: '',
                email: '',
                password: ''
            }) 
        }
    }

    componentWillUpdate(nextProps, nextState){
        sessionStorage.setItem('user', JSON.stringify(nextState))
    }

    handleSubmit = (e) =>{
        console.log(this.state);
        
        e.preventDefault()
        this.props.history.push('/login');
    }
    

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                <form onSubmit={this.handleSubmit} >
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" 
                            value={this.state.first_name}
                            onChange={(e)=>this.setState({first_name:e.target.value})} />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" 
                            value={this.state.last_name}
                            onChange={(e)=>this.setState({last_name:e.target.value})} />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            value={this.state.email}
                            onChange={(e)=>this.setState({email:e.target.value})} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            value={this.state.password}
                            onChange={(e)=>this.setState({password:e.target.value})} />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" value="Submit">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/login">sign in?</a>
                    </p>
                </form>
                </div>

            </div>
        )
    }
}

export default RegisterComponent
