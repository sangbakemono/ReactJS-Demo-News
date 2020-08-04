import React, { Component } from 'react';
import NewsItem from './NewsItem';
import db from './../data.json';

class News extends Component {
    render() {
        var elements = db.map((value, key) => {
            return (
                <NewsItem key={key}
                    anh={value.anh}
                    tieuDe={value.tieuDe}
                    trichDan={value.trichDan}
                />
            )    
        });
        return (
            <div>
                {/* begin header */}
                <header className="masthead tintuc">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto">
                                <div className="header-content mx-auto">
                                    <h1 className="mb-1 text-center">Danh sách tin tức</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* end header */}

                {/* begin tintuc */}
                <div className="container">
                    <div className="row mt-3">
                        {elements}
                     </div>
                </div>
                {/* end tintuc */}

            </div>
        );
    }
}

export default News;