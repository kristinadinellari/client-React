import { IUser } from '../interfaces';
import { db } from '../Firebase/firebase';
import { startSetUsers, startSetUser } from '../components/Content/User/actions';

export const addUser = (): void => {
  db.collection("users").add({
    age: 23,
    email: 'email@gmail.com',
    firstName: 'testNAme',
    lastName: 'testSurname',
    type: 1
  });
};

const users: IUser[] = [];

export const getUsers = () => {
  db.collection("users").get().then((response) => {
    response.forEach((res) => {
      const user = {
        ...res.data(),
        id: res.id
      };
      users.push(user as IUser);
    });
    startSetUsers(users);
  });
};

export const getUser = (firstName: string) => {
  const result: any = [];
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

export const getUserById = (id: string) => {
  return db.collection('users').doc(`${id}`).get();
};
