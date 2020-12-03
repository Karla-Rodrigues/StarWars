import React, { Component } from 'react';
import './App.css';
import Banner from './components/banner';
import Spaceship from './components/spaceship';
import Pagination from './components/pagination';
import Footer from './components/footer';

class App extends Component {

  constructor() {
    super();
    this.state = {
      type: 'people',
      numPage: 1,
      totalPages: 65,
      list: [],
    };
  }

  state = {
    type: 'people',
    numPage: 1,
    totalPages: 65,
    list: []
  };

  // Access using component 
  componentDidMount() {

    const swapiApiUrl = 'https://swapi.dev/api/' + this.state.type + '/?_limit=8';

    fetch(swapiApiUrl)

      // Access with success, put the information in data
      .then(function (data) {
        return data.json();
      })

      // Format each data to the format array line to show
      .then(function (d) {

        let personArray = d.results.map((person) => {

          let name = person.name;
          let height = person.height;
          let mass = person.mass
          let birthYear = person.birth_year;

          return (

            <ul >
              <li>
                <h3> {name} </h3>
                <p> <dark>Height:</dark> {height} </p>
                <p> <dark>Mass:</dark> {mass} </p>
                <p> <dark>Birth Year:</dark> {birthYear} </p>
              </li>
            </ul>

          )

        })

        // Move the obtain information to the setState
        this.setState({ list: personArray });
      }.bind(this))
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <Banner />
          <div className='list'>

            {this.state.list[0]}
            {this.state.list[1]}
            {this.state.list[2]}
            {this.state.list[3]}
            {this.state.list[4]}
            {this.state.list[5]}
            {this.state.list[6]}
            {this.state.list[7]}

          </div>
          <Spaceship />
          <Pagination />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;