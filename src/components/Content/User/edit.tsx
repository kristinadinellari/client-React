import React, { useState, useEffect } from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { updateUser } from '../../../services/users';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface IDialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: IDialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props: any) {
  const [user, setUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    type: 0
  });

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  const saveChanges = () => {
    props.handleClose();
    updateUser(user.id, user);
  };

  return (
    <Dialog maxWidth='lg' onClose={props.handleClose}
      fullWidth={true} aria-labelledby="customized-dialog-title" open={props.open}>
      <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        Edit {user.firstName} {props.user.lastName}
      </DialogTitle>
      <DialogContent className="dialog-holder">
        <TextField fullWidth={true} id="first-name" label="First Name" variant="outlined" value={user.firstName} onChange={e => {
          setUser({
            ...user,
            firstName: e.target.value
          });
        }} />
      </DialogContent>
      <DialogContent className="dialog-holder">
        <TextField fullWidth={true} id="last-name" label="Surname" variant="outlined" value={user.lastName} onChange={e => setUser({
          ...user,
          lastName: e.target.value
        })} />
      </DialogContent>
      <DialogContent className="dialog-holder">
        <TextField fullWidth={true} id="type" type="number" label="Type" variant="outlined" value={user.type} onChange={e => setUser({
          ...user,
          type: parseInt(e.target.value) | 0
        })} />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={saveChanges} color="primary">
          Save changes
        </Button>
      </DialogActions>
    </Dialog >
  );
}
