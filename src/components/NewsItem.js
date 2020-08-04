import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class NewsItem extends Component {
    render() {
        return (
            <div className="col-4 mt-4">
                <div className="card border-primary">
                    <NavLink to="/news-detail"><img className="card-img-top" src={this.props.anh} alt="" /></NavLink>
                    <div className="card-body">
                        <h4 className="card-title"> {this.props.tieuDe}</h4>
                        <p className="card-text">{this.props.trichDan}</p>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default NewsItem;