import { loadShips } from './index';
import { loadError } from './index';

function fetchShips() {

      return dispatch => {

            function onSuccess(shipsArray) {
                  dispatch(loadShips(shipsArray));
                  return shipsArray;
            }

            function onError(module_name, access_data, error) {
                  dispatch(loadError(module_name, access_data, error));
                  return error;
            }

            try {
                  fetch('//swapi.dev/api/starships/')

                        // Access with success, put the information in data
                        .then(data => data.json())

                        // Format each data to the format array line to show
                        .then(d => {

                              let shipsArray = d.results.map((ship) => {

                                    return (
                                          [
                                                ship.name,
                                                ship.model,
                                                ship.starship_class,
                                                ship.url.substring(31),
                                          ]
                                    )

                              });

                              return onSuccess(shipsArray);
                        })
                        // Error
                        .catch(error => {
                              onError('SHIPS', '', error);
                        })
            }

            catch (error) {
                  return onError('SHIPS', '', error);
            }
      }
}

export default fetchShips;