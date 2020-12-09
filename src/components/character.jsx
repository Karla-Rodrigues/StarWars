import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import fetchCharacterAction from '../actions/fetchCharacter';
import { getCharacter } from '../reducers/index';
import Loader from 'react-loader-spinner'

class Character extends Component {

      componentDidMount() {
            let id = this.props.match.params.id;
            const { fetchCharacter } = this.props;
            fetchCharacter(id);
      }

      render() {

            const { character } = this.props;

            if (!character) {
                  return (
                        <Loader type='ThreeDots' color='#F4DC39' height={40} width={40} />
                  )
            }

            return (
                  <div className='gray-box'>
                        <div className='box'>
                              <i class="far fa-user fa-2x"></i>
                              <h3> {character[0]} </h3>
                              <h4> Height: {character[1]} </h4>
                              <h4> Mass: {character[2]} </h4>
                              <h4> Hair Color: {character[3]} </h4>
                              <h4> Skin Color: {character[4]} </h4>
                              <h4> Eye Color: {character[5]} </h4>
                              <h4> Birth Year: {character[6]} </h4>
                              <h4> Gender: {character[7]} </h4>
                              <Link className="link-style" to='/StarWars'>
                                    <i class="fas fa-reply"></i>
                              </Link>
                        </div>
                  </div>
            );
      }
}

const mapStateToProps = (state) => ({
      character: getCharacter(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
      fetchCharacter: fetchCharacterAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Character);