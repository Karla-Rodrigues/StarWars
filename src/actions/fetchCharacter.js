import { loadCharacter } from './index';
import { loadError } from './index';

function fetchCharacter(id) {

      return dispatch => {

            function onSuccess(characterArray) {
                  dispatch(loadCharacter(characterArray));
                  return characterArray;
            }

            function onError(module_name, access_data, error) {
                  dispatch(loadError(module_name, access_data, error));
                  return error;
            }

            try {

                  fetch('//swapi.dev/api/people/' + id)

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
                              console.log(error);
                              onError('CHARACTER', id, error);
                        })
            }

            catch (error) {
                  console.log(error);
                  return onError('CHARACTER', id, error);
            }
      }
}

export default fetchCharacter;