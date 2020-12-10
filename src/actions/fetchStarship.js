import { loadStarship } from './index';
import { loadError } from './index';

function fetchStarship(id) {

      return dispatch => {

            function onSuccess(starshipArray) {
                  dispatch(loadStarship(starshipArray));
                  return starshipArray;
            }

            function onError(module_name, access_data, error) {
                  dispatch(loadError(module_name, access_data, error));
                  return error;
            }

            try {
                  fetch('//swapi.dev/api/starships/' + id)

                        // Access with success, put the information in data
                        .then(data => data.json())

                        // Format each data to the format array line to show
                        .then(d => {

                              let starshipArray =
                                    [
                                          d.name,
                                          d.model,
                                          d.starship_class,
                                    ]

                              return onSuccess(starshipArray);
                        })
                        // Error
                        .catch(error => {
                              onError('STARSHIP', id, error);
                        })

            }

            catch (error) {
                  return onError('STARSHIP', id, error);
            }
      }
}

export default fetchStarship;