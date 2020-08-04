import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class NewsDetail extends Component {
    render() {
        return (
            <div>
                    {/* begin header */}
                    <header className="masthead tintuc">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-12 my-auto">
                                    <div className="header-content mx-auto">
                                        <h1 className="mb-1 text-center">Chi tiết tin tức</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* end header */}

                    {/* begin news detail */}
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <img src="http://placehold.it/1000x500" className="img-fuild" alt="" />
                            <p className="lead">Jumbo helper text</p>
                            <hr className="my-2" />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quam atque, delectus molestias possimus assumenda eligendi. Nihil, neque. Ad, aliquid iusto recusandae ducimus impedit mollitia illo ea ab quia non.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quam atque, delectus molestias possimus assumenda eligendi. Nihil, neque. Ad, aliquid iusto recusandae ducimus impedit mollitia illo ea ab quia non.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quam atque, delectus molestias possimus assumenda eligendi. Nihil, neque. Ad, aliquid iusto recusandae ducimus impedit mollitia illo ea ab quia non.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quam atque, delectus molestias possimus assumenda eligendi. Nihil, neque. Ad, aliquid iusto recusandae ducimus impedit mollitia illo ea ab quia non.</p>
                        </div>
                    </div>
                    <div className="container">
                        <h3 className="text-center">Tin liên quan</h3>
                        <div className="row mt-3">
                            <div className="col-12 xs-1-12">
                                <div className="card-deck">
                                    <div className="card">
                                        <NavLink to="/news-detail"><img className="card-img-top" src="http://placehold.it/500x300" alt="" /></NavLink>
                                        <div className="card-body">
                                            <h4 className="card-title">Title</h4>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta, sapiente vitae ex rem aperiam enim quia, velit ipsa, facilis delectus nisi laboriosam quam ullam asperiores repellat nobis fugit mollitia?</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <NavLink to="/news-detail"><img className="card-img-top" src="http://placehold.it/500x300" alt="" /></NavLink>
                                        <div className="card-body">
                                            <h4 className="card-title">Title</h4>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla at tempore ratione quibusdam pariatur nostrum dolorum culpa quos iusto, tenetur maiores enim modi, eius dolorem accusantium, doloribus neque illo sit?</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <NavLink to="/news-detail"><img className="card-img-top" src="http://placehold.it/500x300" alt="" /></NavLink>
                                        <div className="card-body">
                                            <h4 className="card-title">Title</h4>
                                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti asperiores incidunt voluptate, esse ut dolores autem velit ipsam temporibus iste qui repellendus libero possimus commodi reiciendis harum, vitae vero? Minima?</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <NavLink to="/news-detail"><img className="card-img-top" src="http://placehold.it/500x300" alt="" /></NavLink>
                                        <div className="card-body">
                                            <h4 className="card-title">Title</h4>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis autem qui odio consectetur ipsam fugiat sint quam, harum, quas temporibus illum quisquam nobis nulla. Perspiciatis doloremque omnis eaque nam laborum?</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                    {/* end news detail */}
                </div>
        );
    }
}

export default NewsDetail;