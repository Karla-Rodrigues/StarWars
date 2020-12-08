import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import fetchShipsAction from '../actions/fetchShips';
import { getShips } from '../reducers/index';
import Loader from 'react-loader-spinner'

class Ships extends Component {

      componentDidMount() {
            const { fetchShips } = this.props;
            fetchShips();
      }

      render() {

            const { ships } = this.props;

            if (!ships) {
                  return (
                        <Loader type='ThreeDots' color='#F4DC39' height={40} width={40} />
                  )
            }

            let ini = this.props.item;
            let end = ini + 1;

            return (
                  <div className='list'>
                        {ships.slice(ini, end).map(ship => (
                              <ul key={ship[3]}>
                                    <li>
                                          <i class="far fa-star fa-2x"></i>
                                          <h3><Link className="link-style" to={`/starship/${ship[3]}`}>{ship[0]}</Link></h3>
                                          <h4> Model: {ship[1]} </h4>
                                          <h4> Class: {ship[2]} </h4>
                                    </li>
                              </ul>
                        ))}
                  </div>
            );
      }
}

const mapStateToProps = (state) => ({
      ships: getShips(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
      fetchShips: fetchShipsAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Ships);