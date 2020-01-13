import {IUser} from 'interfaces/index'
import {db} from '../Firebase/firebase'
import { startSetUsers } from '../redux/actions/actions'

export const addUser = (userObj: IUser): void => {
  db.collection("users").add(userObj).then((res) => {
    console.log("Document written with ID: ", res);
  }).catch(function (error) {
    console.error("Error adding document: ", error);
  });
};

let test: Array<IUser> = [];

export const getUsers = () => {
  db.collection("users").get().then((response) => {
    response.forEach((res) => {
      test.push(<IUser>res.data())
    });
    startSetUsers(test)
  });
};

export const getUser = (firstName: string) => {
  // db.collection(`users/${firstName}`).get().then((res) => {
  const res  = db.collection(`users`).doc(`${firstName}`)
  console.log(res, 'res')
};
