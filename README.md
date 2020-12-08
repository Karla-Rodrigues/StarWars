* starwars-app *
Developed by Karla Rodrigues - December 01, 2020.

Access to API (https://swapi.dev/api/) to fetch information about characteres and spaceships.
Each page will return 8 characters and 1 spaceship, with possibility to pagination.
Store the data in Redux. 
The App is responsive for mobile, tablet and desktop.

The App use one independent component for each part:
1 - Banner
2 - People: the collective of all characters
3 - Ships: the collective of all spaceships
4 - Pagination: the control for pagination
5 - Character: the detail information of each character
6 - Starship: the detail information of each spaceship
7 - Footer

*The number of characters and spaceships can be adapt for diferent situations.

The application uses:

- Boostrap 4.1.1
- redux
- Redux DevTools
- react-router-dom
- react-redux
- react-loader-spinner
- fonts.googleapis.com: Jura
- CSS for react-loader-spinner