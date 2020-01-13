import React from "react";
import {getUser, getUsers} from '../services'
import {AppState} from "../redux/storeConfig";
import {connect} from "react-redux";
import { ThunkDispatch } from 'redux-thunk'
import {AppActions} from "../redux/actions/types";

interface LinkDispatchProps {
  
}



const mapStateToProps = (state: AppState) => ({
  users: state.users
});


const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  users: state.users
})

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
    console.log(this.props.users, 'test props')
  };

  render() {
    return (
        <div className='login'>
          <div className='loginForm'>
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

