import {IUser} from '../interfaces'
import {db} from '../Firebase/firebase'
import { startSetUsers, startSetUser } from '../pages/User/actions'

export const addUser = (): void => {
  db.collection("users").add({
    age: 23,
    email: 'email@gmail.com',
    firstName: 'testNAme',
    lastName: 'testSurname',
    type: 1
  }).then((res) => {
    console.log("Document written with ID: ", res);
  }).catch(function (error) {
    console.error("Error adding document: ", error);
  });
};

let test: Array<IUser> = [];

export const getUsers = (userName: string) => {
  db.collection("users").get().then((response) => {
    response.forEach((res) => {
      test.push(<IUser>res.data())
    });
    startSetUsers(test, userName);
    startSetUser(test[0])
  });
};

export const getUser = (firstName: string) => {
  // db.collection(`users/${firstName}`).get().then((res) => {
  const res  = db.collection(`users`).doc(`${firstName}`)
  console.log(res, 'res')
};
