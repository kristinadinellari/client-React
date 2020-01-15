export interface IUser {
  id: any,
  age: number,
  email: string,
  firstName: string,
  lastName: string,
  type: number,
}

export interface ICalorie {
  amount: number,
  date: string,
  userId: string,
}