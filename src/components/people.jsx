import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import fetchPeopleAction from '../actions/fetchPeople';
import { getPeople } from '../reducers/index';
import Loader from 'react-loader-spinner'

class People extends Component {

      componentDidMount() {
            const { fetchPeople } = this.props;
            fetchPeople(1);
            fetchPeople(2);
            fetchPeople(3);
            fetchPeople(4);
            fetchPeople(5);
            fetchPeople(6);
            fetchPeople(7);
            fetchPeople(8);
      }

      render() {

            const { people } = this.props;

            if (!people) {
                  return (
                        <Loader type='ThreeDots' color='#F4DC39' height={40} width={40} />
                  )
            }

            let ini = this.props.item * 8;
            let end = ini + 8;

            return (
                  <div className='list'>
                        {people.slice(ini, end).map(person => (
                              <ul key={person[4]}>
                                    <li >
                                          <i class="far fa-user fa-2x"></i>
                                          <h3><Link className="link-style" to={`/character/${person[4]}`}>{person[0]}</Link></h3>
                                          <h4> Height: {person[1]} </h4>
                                          <h4> Mass: {person[2]} </h4>
                                          <h4> Birth Year: {person[3]} </h4>
                                    </li>
                              </ul>
                        ))}
                  </div>
            );
      }
}

const mapStateToProps = (state) => ({
      people: getPeople(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
      fetchPeople: fetchPeopleAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(People);