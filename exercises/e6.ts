import { data } from "../data/data.js";
import e4 = require("./e4");

// SPACE DATA EXERCISE 6
// Return an array with all asteroids names discovered after a given year
// Return example: ['name1', 'name2', ... , 'nameN']

export function getAsteroidsDiscoveredAfterYear(data: any, year: number) {
    return data.asteroids
        .filter((asteroid: any) => asteroid.discoveryYear && asteroid.discoveryYear > year)
        .map((asteroid: any) => asteroid.name);
}