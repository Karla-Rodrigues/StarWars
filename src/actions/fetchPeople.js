import { loadPeople } from './index';
import { loadError } from './index';

function fetchPeople(page) {

      return async dispatch => {

            function onSuccess(page, peopleArray) {
                  dispatch(loadPeople(page, peopleArray));
                  return peopleArray;
            }

            function onError(error) {

                  dispatch(loadError(error));
                  return error;
            }

            try {

                  fetch('https://swapi.dev/api/people/?page=' + page)

                        // Access with success, put the information in data
                        .then(data => data.json())

                        // Format each data to the format array line to show
                        .then(d => {

                              let peopleArray = d.results.map((person) => {

                                    return (
                                          [
                                                person.name,
                                                person.height,
                                                person.mass,
                                                person.birth_year,
                                                person.url.substring(28),
                                          ]
                                    )

                              });

                              return onSuccess(page, peopleArray);
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

export default fetchPeople;