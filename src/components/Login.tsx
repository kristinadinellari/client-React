import React from "react";
import {Redirect} from 'react-router-dom';

class Login extends React.Component<any, IUser> {
  constructor(props: any) {
    super(props);
  }
  public test() {
    console.log(this.state, 'state')
  }
  private getNameValue(name: String) {
    this.setState({
      name: name
    });
  }
  private getPassword(passw: any) {
    this.setState({
      password: passw
    });
  }

  private onClick () {

  };

  render() {
    return (
        <div className='login'>
          <div className='loginForm'>
            <div className="title">Login</div>
            <div className='inputHolder'>
              <input type="text" onChange={e => this.getNameValue(e.target.value)}/>
            </div>
            <div className='inputHolder'>
              <input type="text" onChange={e => this.getPassword(e.target.value)}/>
            </div>
            <div className='inputHolder'>
              <button onClick={this.onClick}>
                Login
              </button>
            </div>
          </div>
        </div>
    );
  }
}

interface IUser {
  name: String,
  password: any
}

export default Login;
