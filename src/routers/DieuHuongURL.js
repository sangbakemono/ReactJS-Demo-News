import React, { Component } from 'react';
import Home from './../components/Home';
import News from './../components/News';
import NewsDetail from './../components/NewsDetail';
import Contact from './../components/Contact';
import {BrowserRouter as Router, Route} from "react-router-dom";

class DieuHuongURL extends Component {
    render() {
        return (
                <div>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/news" component={News}></Route>
                    <Route exact path="/news-detail" component={NewsDetail}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                </div>
        );
    }
}

export default DieuHuongURL;