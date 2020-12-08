import { LOAD1_PEOPLE } from './actiontypes';
import { LOADN_PEOPLE } from './actiontypes';
import { LOAD_SHIPS } from './actiontypes';
import { LOAD_CHARACTER } from './actiontypes';
import { LOAD_STARSHIP } from './actiontypes';
import { LOAD_ERROR } from './actiontypes';


export function loadPeople(page, people) {
    if (page === 1) {
        return {
            type: LOAD1_PEOPLE,
            people: people
        }
    } else {
        return {
            type: LOADN_PEOPLE,
            people: people
        }
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

export function loadError(error) {
    return {
        type: LOAD_ERROR,
        error: error
    }
}