import React from "react";
import './style.css'

import image3 from '../src/images/posts/tailwindcss.png';
import image4 from '../src/images/bg/user.jpg';

class Blogs extends React.Component{
    render(){
        return(
            <section>
                <section class="blogs" id="blogs">
        <div class="container">
            <h1 class="heading">my blogs</h1>
            <div class="row">
                <div class="col-lg-3  col-sm-6 col-sm-6 col-xs-12">
                    <div class="blogs__card">
                        <div class="blogs__card__image">
                            <img src={image3} alt="post image"/>
                            <div class="blogs__card__image__layer">
                                <span class="blogs__card__image__layer__category">frontend</span>
                            </div>
                        </div>
                        <div class="blogs__card__author">
                            <div class="blogs__card__author__image">
                                <img src={image4} alt="author image"/>
                            </div>
                            <div class="blogs__card__author__details">
                                <span class="blogs__card__author__details__name">muhammad asif</span>
                                <span class="blogs__card__author__details__date">
                                    <i class="bi bi-clock"></i>
                                    <span class="blogs__card__author__details__date__time">15 jan 2022</span>
                                </span>
                            </div>
                        </div>
                        <div class="blogs__card__body">
                            <h3 class="blogs__card__body__title">
                                <a href="#">Tailwindcss the complete guide for beginners</a>
                            </h3>
                            <a href="#" class="blogs__card__body__link">read more →</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3  col-sm-6 col-sm-6 col-xs-12">
                    <div class="blogs__card">
                        <div class="blogs__card__image">
                            <img src={image3} alt="post image"/>
                            <div class="blogs__card__image__layer">
                                <span class="blogs__card__image__layer__category">frontend</span>
                            </div>
                        </div>
                        <div class="blogs__card__author">
                            <div class="blogs__card__author__image">
                                <img src={image4} alt="author image"/>
                            </div>
                            <div class="blogs__card__author__details">
                                <span class="blogs__card__author__details__name">muhammad asif</span>
                                <span class="blogs__card__author__details__date">
                                    <i class="bi bi-clock"></i>
                                    <span class="blogs__card__author__details__date__time">15 jan 2022</span>
                                </span>
                            </div>
                        </div>
                        <div class="blogs__card__body">
                            <h3 class="blogs__card__body__title">
                                <a href="#">Tailwindcss the complete guide for beginners</a>
                            </h3>
                            <a href="#" class="blogs__card__body__link">read more →</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3  col-sm-6 col-sm-6 col-xs-12">
                    <div class="blogs__card">
                        <div class="blogs__card__image">
                            <img src={image3} alt="post image"/>
                            <div class="blogs__card__image__layer">
                                <span class="blogs__card__image__layer__category">frontend</span>
                            </div>
                        </div>
                        <div class="blogs__card__author">
                            <div class="blogs__card__author__image">
                                <img src={image4} alt="author image"/>
                            </div>
                            <div class="blogs__card__author__details">
                                <span class="blogs__card__author__details__name">muhammad asif</span>
                                <span class="blogs__card__author__details__date">
                                    <i class="bi bi-clock"></i>
                                    <span class="blogs__card__author__details__date__time">15 jan 2022</span>
                                </span>
                            </div>
                        </div>
                        <div class="blogs__card__body">
                            <h3 class="blogs__card__body__title">
                                <a href="#">Tailwindcss the complete guide for beginners</a>
                            </h3>
                            <a href="#" class="blogs__card__body__link">read more →</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3  col-sm-6 col-sm-6 col-xs-12">
                    <div class="blogs__card">
                        <div class="blogs__card__image">
                            <img src={image3} alt="post image"/>
                            <div class="blogs__card__image__layer">
                                <span class="blogs__card__image__layer__category">frontend</span>
                            </div>
                        </div>
                        <div class="blogs__card__author">
                            <div class="blogs__card__author__image">
                                <img src={image4} alt="author image"/>
                            </div>
                            <div class="blogs__card__author__details">
                                <span class="blogs__card__author__details__name">muhammad asif</span>
                                <span class="blogs__card__author__details__date">
                                    <i class="bi bi-clock"></i>
                                    <span class="blogs__card__author__details__date__time">15 jan 2022</span>
                                </span>
                            </div>
                        </div>
                        <div class="blogs__card__body">
                            <h3 class="blogs__card__body__title">
                                <a href="#">Tailwindcss the complete guide for beginners</a>
                            </h3>
                            <a href="#" class="blogs__card__body__link">read more →</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </section>
          </section>
        );
    }
}

export default Blogs;