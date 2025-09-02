import { data } from "../data/data";

// SPACE DATA EXERCISE 2
// Return an array of all Asteroids' names
// Return example: ['name1', 'name2', ... , 'nameN']

export function getAsteroidNames(data: any) {
  return data.asteroids.map((astroids:any) => astroids.name);
}

console.log(getAsteroidNames(data));
