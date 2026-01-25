import { heroes } from "../data/heroes.ts";


export const findHeroById = (id: number) => {
    return heroes.find(hero => hero.id === id);
}