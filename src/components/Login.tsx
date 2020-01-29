import React from "react";
import { getUser } from '../services/users';
import { AppState } from "../store/storeConfig";
import { connect } from "react-redux";
import { IUser } from "../interfaces/index";
import { startSetUser } from '../components/Content/User/actions';

const mapStateToProps = (state: AppState) => ({
  user: state.user,
  userName: state.userName
});

export class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: String,
      password: ''
    };
  }


  login = () => {
    const userName = this.state.name;
    const result: any = [];
    getUser(userName).then((response) => {
      response.forEach((res) => {
        const user = {
          ...res.data(),
          id: res.id,
        };
        result.push(user);
      });
      const userObj: IUser = result[0];
      const { id, firstName, lastName, type } = userObj;
      localStorage.setItem('user', JSON.stringify({
        id: id,
        firstName: firstName,
        fullName: `${firstName} ${lastName}`,
        lastName: lastName,
        type: type
      }));
      startSetUser(userObj);
    });
    this.props.history.push("/users");
  }

  render() {
    return (
      <div className='login'>
        <div className='loginForm' >
          <div className="title">Login</div>
          <div className='inputHolder'>
            <input type="text" onChange={e => this.setState({
              name: e.target.value
            })} />
          </div>
          <div className='inputHolder'>
            <input type="text" onChange={e => this.setState({
              password: e.target.value
            })} />
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

