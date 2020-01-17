import { db } from '../Firebase/firebase';

export const getCalories = (userId: string) => {
  return db.collection('calories').where('userId', '==', `${userId}`).get();
};