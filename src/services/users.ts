import { IUser } from '../interfaces'
import { db } from '../Firebase/firebase'
import { startSetUsers, startSetUser } from '../components/Content/User/actions'

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

let users: Array<IUser> = [];

export const getUsers = () => {
  db.collection("users").get().then((response) => {
    response.forEach((res) => {
      const user = {
        ...res.data(),
        id: res.id
      };
      users.push(<IUser>user);
    });
    startSetUsers(users);
  });
};

export const getUser = (firstName: string) => {
  const result: Array<any> = [];
  db.collection('users').where('firstName', '==', `${firstName}`).get().then((response) => {
    response.forEach((res) => {
      const user = {
        ...res.data(),
        id: res.id,
      };
      result.push(user);
    });
    startSetUser(result[0]);
  });
};
