import React from 'react';

function TopBar() {
  return (
    <div className="kf_top_bar">
        <div className="container">
            <div className="pull-left">
                <ul className="kf_social2">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-rss"></i></a></li>
                </ul>
            </div>
            <div className="kf_right_dec">
                <ul className="kf_topdec">
                    <li>
                        <div className="kf_lung">
                            <span>Curreny :</span>
                            <div className="dropdown">
                                <button id="dLabel" type="button"> USD
                                </button>
                                <ul className="dropdown-menu">
                                    <li>BRL</li>
                                    <li>EUR</li>
                                </ul>
                            </div> 
                        </div>
                    </li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Whishlist</a></li>
                </ul>
                <ul className="kf_user">
                    <li><a href="#"><i className="fa fa-lock"></i>Sign up</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
                <a href="#" className="kode_search"><i className="fa fa-search"></i></a>
            </div>
        </div>
    </div>
  );
}

export default TopBar;
