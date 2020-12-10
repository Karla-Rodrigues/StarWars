import { LOAD_PEOPLE } from './actiontypes';
import { LOAD_SHIPS } from './actiontypes';
import { LOAD_CHARACTER } from './actiontypes';
import { LOAD_STARSHIP } from './actiontypes';
import { LOAD_ERROR } from './actiontypes';


export function loadPeople(people) {
    return {
        type: LOAD_PEOPLE,
        people: people
    }
}

export function loadShips(ships) {
    return {
        type: LOAD_SHIPS,
        ships: ships
    }
}

export function loadCharacter(character) {
    return {
        type: LOAD_CHARACTER,
        character: character
    }
}

export function loadStarship(starship) {
    return {
        type: LOAD_STARSHIP,
        starship: starship
    }
}

export function loadError(module_name, access_data, error) {
    return {
        type: LOAD_ERROR,
        module_name: module_name,
        access_data: access_data,
        error: error
    }
}