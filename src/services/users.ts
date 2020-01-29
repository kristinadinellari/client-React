import { db } from '../Firebase/firebase';
import { IUser } from 'interfaces';

export const addUser = (): void => {
  db.collection("users").add({
    age: 23,
    email: 'email@gmail.com',
    firstName: 'testNAme',
    lastName: 'testSurname',
    type: 1
  });
};


export const getUsers = () => {
  return db.collection("users").get();
};

export const getUser = (firstName: string) => {
  return db.collection('users').where('firstName', '==', `${firstName}`).get();
};

export const getUserById = (id: string) => {
  return db.collection('users').doc(`${id}`).get();
};

export const updateUser = (id: string, body: any) => {
  return db.collection('users').doc(`${id}`).update(body)
    .then(() => {
      console.log("Document successfully updated!");
    });
};
