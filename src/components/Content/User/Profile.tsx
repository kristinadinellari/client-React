import React, { useState, useEffect, useCallback } from 'react';
import { getCalories } from '../../../services/calories';
import { getUserById } from '../../../services/users';
import { ICalorie } from '../../../interfaces';
import { Edit } from '@material-ui/icons';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CustomizedDialogs from './edit';
import RowComponent from './TableRow';

const ProfileComponent = (props: any) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: ''
  });

  const [calories, setCalories] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const getUserData = useCallback(() => {
    const id: string = props.match.params.id;
    getUserById(id).then((response: any) => {
      setUser({
        ...response.data(),
        id: id
      });
    });
  }, [props.match.params.id]);

  const handleClose = () => {
    setOpen(false);
    getUserData();
  };

  useEffect(() => {
    getUserData();
  }, [getUserData, props.match.params.id]);

  useEffect(() => {
    const caloriesData: any = [];
    const id: string = props.match.params.id;
    getCalories(id).then((response) => {
      response.forEach((res) => {
        caloriesData.push(res.data());
      });
      setCalories(caloriesData);
    });
  }, [props.match.params.id]);

  return (
    <div>
      <h2 className="nameHolder">
        {user.firstName} {user.lastName}
        <Fab aria-label="edit" onClick={handleClickOpen}>
          <Edit />
        </Fab>
      </h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Amout</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {calories.map((calorie: ICalorie, index: number) => (
              <RowComponent calorie={calorie} key={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomizedDialogs open={open} handleClose={handleClose} user={user} />
    </div>
  );
};

export default ProfileComponent;