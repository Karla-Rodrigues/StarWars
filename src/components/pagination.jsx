import React, { Component } from "react";

class Pagination extends Component {

      render() {

            const { item, onNext, onPrevious } = this.props;

            return (
                  <div>
                        {item !== 0 &&
                              <span onClick={() => onPrevious()} className="pageButton">
                                    <i class="fas fa-chevron-circle-left"></i>
                              </span>}

                        {item !== 11 &&
                              <span onClick={() => onNext()} className="pageButton">
                                    <i class="fas fa-chevron-circle-right"></i>
                              </span>}
                  </div>
            );
      }
}

export default Pagination;