import React, { Component } from 'react';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Banner from './components/banner';
import People from './components/people';
import Ships from './components/ships';
import Pagination from './components/pagination';
import Character from './components/character';
import Starship from './components/starship';
import Footer from './components/footer';

class App extends Component {

      state = {
            item: 0,

      }

      handleNext = () => {
            let item = this.state.item;
            item += 1;
            this.setState({ item });
      };

      handlePrevious = () => {
            let item = this.state.item;
            if (item > 0) {
                  item -= 1;
            }
            this.setState({ item });
      };

      render() {
            return (
                  <Router>
                        <div className='App'>
                              <div className='container'>
                                    <Route exact path={'/StarWars'} render={props => (
                                          <React.Fragment>
                                                <Banner />
                                                <People item={this.state.item} />
                                                <Ships item={this.state.item} />
                                                <Pagination item={this.state.item} onNext={this.handleNext} onPrevious={this.handlePrevious} />
                                                <Footer />
                                          </React.Fragment>
                                    )} />
                                    <Route exact path={'/character/:id'} render={props => (
                                          <React.Fragment>
                                                <Banner />
                                                <Character {...props} />
                                                <Footer />
                                          </React.Fragment>
                                    )} />
                                    <Route exact path={'/starship/:id'} render={props => (
                                          <React.Fragment>
                                                <Banner />
                                                <Starship {...props} />
                                                <Footer />
                                          </React.Fragment>
                                    )} />
                              </div>
                        </div>
                  </Router>
            );
      }
}

export default App;