import {IUser} from 'interfaces/index'
import {db} from '../Firebase/firebase'

export class UserService {
  public addUser(userObj: IUser): void {
    db.collection("users").add(userObj).then((res) => {
      console.log("Document written with ID: ", res);
    }).catch(function (error) {
      console.error("Error adding document: ", error);
    });
  };
  public getUsers() {
    db.collection("users").get().then((response) => {
      response.forEach((res) => {
        console.log(res.data(), 'dat');
      });
    });
  };
  public getUser(firstName: string) {
    db.collection(`users/${firstName}`).get().then((res) => {
      console.log(res, 'dat');
    });
  };
}

