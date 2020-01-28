import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { IUser } from '../../../interfaces';
import { AppState } from "../../../store/storeConfig";
import { getUsers } from '../../../services/users';
import { startSetUsers } from './actions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';

const mapStateToProps = (state: AppState) => ({
  users: state.users
});

export class UsersList extends React.Component<any, any> {
  users(): IUser[] {
    if (this.props.users && this.props.users.length > 0) {
      return this.props.users;
    }
    else {
      return [];
    }
  }

  getUser = () => {
    const user: any = localStorage.getItem('user');
    return JSON.parse(user);
  };

  getUsersData() {
    let users: IUser[] = [];
    if (!this.props.users || this.props.users.length < 0) {
      getUsers().then((response) => {
        response.forEach((res) => {
          const user = {
            ...res.data(),
            id: res.id
          };
          users.push(user as IUser);
          if (this.getUser() && this.getUser().type === 2) {
            users = users.filter((a: IUser) => a.type === 2 || a.type === 3);
          }
          if (this.getUser() && this.getUser().type === 3) {
            users = users.filter((a: IUser) => a.type === 3);
          }
        });
        startSetUsers(users);
      });
    }
  }

  componentDidMount() {
    this.getUsersData();
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Surname</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.users().map((user: IUser) => (
              <TableRow key={user.id}>
                <TableCell align="center">
                  <Link to={user.id}>
                    {user.firstName}
                  </Link>
                </TableCell>
                <TableCell align="center">{user.lastName}</TableCell>
                <TableCell align="center">{user.type}</TableCell>
                <TableCell align="center">
                  <EditIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default connect(mapStateToProps)(UsersList);