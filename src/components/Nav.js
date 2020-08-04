import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div>
                {/*bigin Navigation */}
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                        <NavLink className="navbar-brand js-scroll-trigger" to="/home">Tutorial ReactJS</NavLink>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu <i className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li>
                                    <NavLink className="nav-link js-scroll-trigger" to="/home">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link js-scroll-trigger" to="/news">Tin tức</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link js-scroll-trigger" to="/news-detail">Chi tiết tin</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link js-scroll-trigger" to="/contact">Liên hệ</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/*end Navigation */}

            </div>
            );
    }
}

export default Nav;
