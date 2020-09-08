import React, { Component } from 'react'

class LoginComponent extends Component {

    loginData;

    constructor(props) {
        super(props)
    
        this.state = {
            email: '',
            password: ''
        }
        this.login = this.login.bind(this)
    }

        //React Life Cycle
        componentDidMount(){
            this.loginData = JSON.parse(sessionStorage.getItem('login'))
    
            if(sessionStorage.getItem('login')){
                this.setState({
                    email: this.loginData.email,
                    password: this.loginData.password
                })
            }else{
                this.setState({
                    email: '',
                    password: ''
                }) 
            }
        }

        componentWillUpdate(nextProps, nextState){
            sessionStorage.setItem('login', JSON.stringify(nextState))
        }

    login(e){
        const user = JSON.parse(sessionStorage.getItem("user"))
        const login = JSON.parse(sessionStorage.getItem("login"))
        console.log("test", user.email, login.email);
        if(login.email == user.email && login.password == user.password){
            this.props.history.push('/dashboard');
        }
        else{
            alert('Credentials not matched')
        }
        
    }
    
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                <form onSubmit={this.login} >
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
