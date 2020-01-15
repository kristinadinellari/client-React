import React from 'react';
import { connect } from "react-redux";
import { IUser } from 'interfaces';
import { AppState } from "../../store/storeConfig";
import { getUsers } from '../../services'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const mapStateToProps = (state: AppState) => ({
  users: state.users
});

export class SimpleTable extends React.Component<any, any> {

  users(): IUser[] {
    if (this.props.users && this.props.users.length > 0) {
      return this.props.users;
    }
    else {
      return [];
    }
  }

  getUserData() {
    if (!this.props.users || this.props.users.length < 0) {
      getUsers();
    }
  }

  render() {
    this.getUserData()
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Surname</TableCell>
              <TableCell align="right">Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.users().map((user: IUser) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell align="right">{user.firstName}</TableCell>
                <TableCell align="right">{user.lastName}</TableCell>
                <TableCell align="right">{user.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
};

export default connect(mapStateToProps)(SimpleTable);