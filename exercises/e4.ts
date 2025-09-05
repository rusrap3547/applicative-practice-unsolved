import { data } from "../data/data";

// Returns an array of planet names with gravity less than 10
type Planet = { name: string; gravity: number };
type SpaceData = { planets: Planet[] };

export function getPlanetsWithLowGravity(data: SpaceData): string[] {
  return data.planets
    .filter(planet => planet.gravity < 10)
    .map(planet => planet.name);
}
