import { loadCharacter } from './index';
import { loadError } from './index';

function fetchCharacter(id) {

      return dispatch => {

            function onSuccess(characterArray) {
                  dispatch(loadCharacter(characterArray));
                  return characterArray;
            }

            function onError(error) {
                  dispatch(loadError(error));
                  return error;
            }

            try {

                  fetch('https://swapi.dev/api/people/' + id)

                        // Access with success, put the information in data
                        .then(data => data.json())

                        // Format each data to the format array line to show
                        .then(d => {

                              let characterArray =
                                    [
                                          d.name,
                                          d.height,
                                          d.mass,
                                          d.hair_color,
                                          d.skin_color,
                                          d.eye_color,
                                          d.birth_year,
                                          d.gender,
                                    ]

                              return onSuccess(characterArray);
                        })
                        // Error
                        .catch(error => {
                              onError(error);
                        })
            }

            catch (error) {
                  return onError(error);
            }
      }
}

export default fetchCharacter;