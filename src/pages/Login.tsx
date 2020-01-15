import React from "react";
import { Redirect } from 'react-router-dom'
import { getUsers, getUser } from '../services/users'
import { AppState } from "../store/storeConfig";
import { connect } from "react-redux";
import { IUser } from '../interfaces'

const mapStateToProps = (state: AppState) => ({
  users: state.users,
  user: state.user,
  userName: state.userName
});

export class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: String,
      password: '',
      redirect: false
    };
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/users'/>
    } 
  };

  login = () => {
    const userName = this.state.name;
    getUser(userName);
    // getUsers();
    this.setRedirect();
  };

  users ():IUser[] {
    if (this.props.users && this.props.users.length > 0) {
      return this.props.users;
    }
    else {
      return [];
    }
  }
  render() {
    return (
        <div className='login'>
          {this.renderRedirect()}
          <div className='loginForm' >
              {this.users().map((a: IUser):string => a.firstName)}
            <div className="title">Login</div>
            <div className='inputHolder'>
              <input type="text" onChange={e => this.setState({
                name: e.target.value
              })}/>
            </div>
            <div className='inputHolder'>
              <input type="text" onChange={e => this.setState({
                password: e.target.value
              })}/>
            </div>
            <div className='inputHolder'>
              <button onClick={this.login}>
                Login
              </button>
            </div>
          </div>
        </div>
    );
  }
}

export default connect(mapStateToProps)(Login);

