import { LOAD_PEOPLE } from '../actions/actiontypes';
import { LOAD_SHIPS } from '../actions/actiontypes';
import { LOAD_CHARACTER } from '../actions/actiontypes';
import { LOAD_STARSHIP } from '../actions/actiontypes';
import { LOAD_ERROR } from '../actions/actiontypes';


const initialState = {
      swapi: [],
}

function SwapiReducer(state = initialState, action) {

      switch (action.type) {
            case LOAD_PEOPLE:
                  if (state.people == null) {
                        return {
                              ...state,
                              people: action.people
                        }
                  } else {
                        return {
                              ...state,
                              people: [...state.people, ...action.people]
                        }
                  }
            case LOAD_SHIPS:
                  return {
                        ...state,
                        ships: action.ships
                  }
            case LOAD_CHARACTER:
                  return {
                        ...state,
                        character: action.character
                  }
            case LOAD_STARSHIP:
                  return {
                        ...state,
                        starship: action.starship
                  }
            case LOAD_ERROR:
                  return {
                        ...state,
                        error: action.error
                  }
            default:
                  return state;
      }
}

export const getPeople = state => state.people;
export const getShips = state => state.ships;
export const getCharacter = state => state.character;
export const getStarship = state => state.starship;

export default SwapiReducer;