import React, { Component } from "react";

class Banner extends Component {
      state = {};
      render() {
            return (
                  <div>
                        <span class="pageButton" type="submit">
                              <i class="fas fa-chevron-circle-left"></i>
                        </span>
                        <span class="pageButton" type="submit">
                              <i class="fas fa-chevron-circle-right"></i>
                        </span>
                  </div>
            );
      }
}

export default Banner;