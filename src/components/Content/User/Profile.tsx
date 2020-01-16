import React from 'react';
import { AppState } from "../../../store/storeConfig";
import { connect } from "react-redux";
import { getCalories } from '../../../services/calories';
import { ICalorie } from '../../../interfaces';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const mapStateToProps = (state: AppState) => ({
  users: state.users
});

export class ProfileComponent extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      calories: []
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData() {
    const UserFromlocalStorage: any = localStorage.getItem('user');
    const userObj = JSON.parse(UserFromlocalStorage);
    const caloriesData: any = [];
    if (userObj && userObj.id) {
      getCalories(userObj.id).then((response) => {
        response.forEach((res) => {
          caloriesData.push(res.data());
        });
        this.setState({ calories: caloriesData });
      });
    }
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Amout</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.calories.map((calorie: ICalorie, index: number) => (
              <TableRow key={index}>
                <TableCell>{calorie.amount}</TableCell>
                <TableCell>{calorie.date}</TableCell>
                <TableCell>{calorie.userId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default connect(mapStateToProps)(ProfileComponent);