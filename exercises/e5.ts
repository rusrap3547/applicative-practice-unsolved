import { data } from "../data/data";

// SPACE DATA EXERCISE 5
// Return an array with all Planets' names with a massValue greater or equal to a given number (1-7)
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithMassValue(data: any, number: number): string[] {
  return data.planets
    .filter((planet: any) => planet.massValue >= number)
    .map((planet: any) => planet.name);
}