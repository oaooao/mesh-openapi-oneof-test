import { Cat, Dog } from './models';

export const pets: { [id: string]: Cat | Dog } = {
  '1': {
    name: 'Fluffy',
    petType: 'Cat',
    color: 'climber',
  },
  '2': {
    name: 'Buddy',
    petType: 'Dog',
    age: '23',
  },
};
