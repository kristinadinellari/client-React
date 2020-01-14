import React from "react";
import {getUsers} from '../services'
import {AppState} from "../redux/storeConfig";
import {connect} from "react-redux";
import {IUser} from '../interfaces'

const mapStateToProps = (state: AppState) => ({
  users: state.users
});


export class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: String,
      password: '',
      users: []
    };
  }

  login = () => {
    getUsers();
  };

  render() {
      console.log(this.props, 'props me reder')
    return (
        <div className='login'>
          <div className='loginForm'>
              {this.props.users.map((a: IUser):string => {
                  return a.firstName
              })}
            <div className="title">Login {this.state.name}</div>
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

