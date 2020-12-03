import React from "react";

const Footer = () => {
      return (
            <div className='footer'>
                  <div className='row'>
                        <div className='col'>

                              <ul>
                                    <li>
                                          <a href='https://www.linkedin.com/in/2karla/'>
                                                <i class="fab fa-linkedin fa-2x"></i></a>
                                    </li>
                                    <li>
                                          <a href='"https://github.com/Karla-Rodrigues'>
                                                <i class="fab fa-github-square fa-2x"></i></a>
                                    </li>
                                    <li>
                                          <a href='mailto:karlaadautor@gmail.com'>
                                                <i class="fas fa-envelope fa-2x"></i></a>
                                    </li>
                              </ul>

                              <p className="footer" >&copy;&nbsp;Copyright Karla Rodrigues</p>

                        </div>
                  </div>
            </div>
      );
};

export default Footer;
