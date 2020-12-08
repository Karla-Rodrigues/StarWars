import { loadShips } from './index';
import { loadError } from './index';

function fetchShips() {

      return async dispatch => {

            function onSuccess(shipsArray) {
                  dispatch(loadShips(shipsArray));
                  return shipsArray;
            }

            function onError(error) {
                  dispatch(loadError(error));
                  return error;
            }

            try {
                  await fetch('https://swapi.dev/api/starships/')

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
                              onError(error);
                        })
            }

            catch (error) {
                  return onError(error);
            }
      }
}

export default fetchShips;