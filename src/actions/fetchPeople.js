import { loadPeople } from './index';
import { loadError } from './index';

function fetchPeople(page) {

      return dispatch => {

            function onSuccess(peopleArray) {
                  dispatch(loadPeople(peopleArray));
                  return peopleArray;
            }

            function onError(module_name, access_data, error) {
                  dispatch(loadError(module_name, access_data, error));
                  return error;
            }

            try {

                  fetch('//swapi.dev/api/people/?page=' + page)

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

                              return onSuccess(peopleArray);
                        })
                        // Error
                        .catch(error => {
                              onError('PEOPLE', page, error);
                        })
            }

            catch (error) {
                  return onError('PEOPLE', page, error);
            }
      }
}

export default fetchPeople;