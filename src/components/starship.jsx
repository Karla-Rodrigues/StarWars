import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import fetchStarshipAction from '../actions/fetchStarship';
import { getStarship } from '../reducers/index';
import Loader from 'react-loader-spinner'

class Starship extends Component {

      componentDidMount() {
            let id = this.props.match.params.id;
            const { fetchStarship } = this.props;
            fetchStarship(id);
      }

      render() {

            const { starship } = this.props;

            if (!starship) {
                  return (
                        <Loader type='ThreeDots' color='#F4DC39' height={80} width={80} />
                  )
            }

            return (
                  <div className='gray-box'>
                        <div className='gray-box'>
                              <i class="far fa-star fa-2x"></i>
                              <h3> {starship[0]} </h3>
                              <h4> Model: {starship[1]} </h4>
                              <h4> Class: {starship[2]} </h4>
                              <Link className="link-style2" to='/StarWars'>
                                    <i class="fas fa-reply"></i>
                              </Link>
                        </div>
                  </div>
            );
      }
}

const mapStateToProps = (state) => ({
      starship: getStarship(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
      fetchStarship: fetchStarshipAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Starship);