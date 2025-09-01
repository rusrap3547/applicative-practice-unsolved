import { data } from "../data/data";

// SPACE DATA EXERCISE 2
// Return an array of all Asteroids' names
// Return example: ['name1', 'name2', ... , 'nameN']

export function getAsteroidNames(data) {
  const astroidNames: string[] = [];
    data.astroids.forEach(name => {
        astroidNames.push();
    });
    return astroidNames;
}

console.log(getAsteroidNames(data));
