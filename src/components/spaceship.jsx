import React, { Component } from "react";


class spaceship extends Component {
      constructor() {
            super();
            this.state = {
                  type: 'starships',
                  numPage: 1,
                  totalPages: 65,
                  spaceship: [],
                  index: 0,
            };
      }

      state = {
            type: 'people',
            numPage: 1,
            totalPages: 65,
            spaceship: [],
            index: 0,
      };

      // Access using component 
      componentDidMount() {

            const swapiApiUrl = 'http://swapi.dev/api/' + this.state.type + '/';

            fetch(swapiApiUrl, {
                  // Access parameters
                  page: this.state.numPage,
                  tagmode: "any",
                  format: "json"
            })

                  // Access with success, put the information in data
                  .then(function (data) {
                        return data.json();
                  })

                  // Format each data to the format array line to show
                  .then(function (d) {

                        let spaceshipArray = d.results.map((spaceship) => {

                              let name = spaceship.name;
                              let model = spaceship.model;
                              let starship = spaceship.starship_class;


                              return (

                                    <ul >
                                          <li>
                                                <h3> {name} </h3>
                                                <p> <dark>Model:</dark> {model} </p>
                                                <p> <dark>Star Ship Class:</dark> {starship} </p>
                                          </li>
                                    </ul>

                              )

                        })

                        // Move the obtain information to the setState
                        this.setState({ spaceship: spaceshipArray });
                  }.bind(this))
      }
      render() {
            return (
                  <div className='ship'>
                        {this.state.spaceship[this.state.index]}
                  </div>
            );
      }
}

export default spaceship;