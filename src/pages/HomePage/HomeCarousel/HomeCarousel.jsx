import './HomeCarousel.scss';
import { IoIosBarcode, IoIosBookmarks, IoLogoBuffer, IoIosBulb, IoMdBriefcase } from 'react-icons/io'
import React, { Component } from 'react'

export default class HomeCarousel extends Component {
    render() {
        return (
            <section className="carousel">
                <div className="overlay">
                </div>
                <div className="container">
                    <div className="carousel__search">
                        <h1>Getting started with <span>LMStudy</span></h1>
                        <p>We pride ourselves on providing the most up-to-date content for our students to learn each course.</p>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="What do you want to learn ?" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-info ">Search</button>
                            </div>
                        </div>
                        <div className="search__info">
                            <ul >
                                <li>
                                    <div className="search__circle">
                                        <IoIosBarcode className="search__icon" />
                                        <p>Learn From The Expert</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="search__circle">
                                        <IoIosBookmarks className="search__icon" />
                                        <p>Accredited Curriculum</p>
                                    </div>

                                </li>
                                <li>
                                    <div className="search__circle">
                                        <IoLogoBuffer className="search__icon" />
                                        <p>Learn Anything Online</p>
                                    </div>

                                </li>
                                <li>
                                    <div className="search__circle">
                                        <IoIosBulb className="search__icon" />
                                        <p>Best Industry Leaders</p>
                                    </div>

                                </li>
                                <li>
                                    <div className="search__circle">
                                        <IoMdBriefcase className="search__icon" />
                                        <p>Book Library and Store</p>


                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
