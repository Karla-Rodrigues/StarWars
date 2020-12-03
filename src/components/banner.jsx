import React, { Component } from "react";
import logo from './logo.png';

class Banner extends Component {
      state = {};
      render() {
            return (
                  <div className='banner'>
                       <img src={logo} alt='logo' />
                  </div>
            );
      }
}

export default Banner;