import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Edit } from '@material-ui/icons';

const RowComponent = (props: any) => {
  return (
    <TableRow>
      <TableCell>{props.calorie.amount}</TableCell>
      <TableCell>{props.calorie.date}</TableCell>
      <TableCell>{props.calorie.userId}</TableCell>
      <TableCell>
        <Edit />
      </TableCell>
    </TableRow>
  );
};

export default RowComponent;