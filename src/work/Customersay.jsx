import React from "react";
import './style.css'
import user1 from '../src/images/testimonials/user1.jpg';
import user2 from '../src/images/testimonials/user2.jpg';
import user3 from '../src/images/testimonials/user3.jpg';
import user4 from '../src/images/testimonials/user4.jpg';
import user5 from '../src/images/testimonials/user5.jpg';
import user6 from '../src/images/testimonials/user6.jpg';

class Customersay extends React.Component{
    render(){
        return(
            <section>
    
    <section class="testimonials" id="testimonials">
        <div class="container">
            <h1 class="heading">what customers are saying?</h1>
            <div class="row">
                <div class="col-xlg-8 col-md-12  col-sm-12 py-0">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div class="testimonials__card">
                                <div class="testimonials__card__icon">
                                    <i class="bi bi-chat-dots"></i>
                                </div>
                                <div class="testimonials__card__user">
                                    <div class="testimonials__card__user__image">
                                        <img src={user1} alt="user image"/>
                                    </div>
                                    <div class="testimonials__card__user__details">
                                        <span class="testimonials__card__user__details__name">saddiq hussain</span>
                                        <span class="testimonials__card__user__details__country">united kingdom</span>
                                        <span class="testimonials__card__user__details__rating">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                        </span>
                                    </div>
                                </div>
                                <p class="testimonials__card__message">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam deleniti quas
                                    corrupti quibusdam unde provident illum, repellendus enim facere.
                                </p>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div class="testimonials__card">
                                <div class="testimonials__card__icon">
                                    <i class="bi bi-chat-dots"></i>
                                </div>
                                <div class="testimonials__card__user">
                                    <div class="testimonials__card__user__image">
                                        <img src={user2} alt="user image"/>
                                    </div>
                                    <div class="testimonials__card__user__details">
                                        <span class="testimonials__card__user__details__name">json roy</span>
                                        <span class="testimonials__card__user__details__country">ireland</span>
                                        <span class="testimonials__card__user__details__rating">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                        </span>
                                    </div>
                                </div>
                                <p class="testimonials__card__message">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam deleniti quas
                                    corrupti quibusdam unde provident illum, repellendus enim facere.
                                </p>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div class="testimonials__card">
                                <div class="testimonials__card__icon">
                                    <i class="bi bi-chat-dots"></i>
                                </div>
                                <div class="testimonials__card__user">
                                    <div class="testimonials__card__user__image">
                                        <img src={user3} alt="user image"/>
                                    </div>
                                    <div class="testimonials__card__user__details">
                                        <span class="testimonials__card__user__details__name">mustafa kamal</span>
                                        <span class="testimonials__card__user__details__country">turkey</span>
                                        <span class="testimonials__card__user__details__rating">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                        </span>
                                    </div>
                                </div>
                                <p class="testimonials__card__message">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam deleniti quas
                                    corrupti quibusdam unde provident illum, repellendus enim facere.
                                </p>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div class="testimonials__card">
                                <div class="testimonials__card__icon">
                                    <i class="bi bi-chat-dots"></i>
                                </div>
                                <div class="testimonials__card__user">
                                    <div class="testimonials__card__user__image">
                                        <img src={user4} alt="user image"/>
                                    </div>
                                    <div class="testimonials__card__user__details">
                                        <span class="testimonials__card__user__details__name">muhammad ali</span>
                                        <span class="testimonials__card__user__details__country">pakistan</span>
                                        <span class="testimonials__card__user__details__rating">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                        </span>
                                    </div>
                                </div>
                                <p class="testimonials__card__message">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam deleniti quas
                                    corrupti quibusdam unde provident illum, repellendus enim facere.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-xlg-4 col-md-12 col-sm-12 order-1">
                    <div class="testimonials__right">
                        <h1 class="testimonials__right__heading">That's the thing i'm motivited</h1>
                        <div class="testimonials__right__images">
                            <div class="testimonials__right__images__block">
                                <img src={user1} alt="user image"/>
                            </div>

                            <div class="testimonials__right__images__block">
                                <img src={user2} alt="user image"/>
                            </div>

                            <div class="testimonials__right__images__block">
                                <img src={user3} alt="user image"/>
                            </div>

                            <div class="testimonials__right__images__block">
                                <img src={user4} alt="user image"/>
                            </div>

                            <div class="testimonials__right__images__block">
                                <img src={user5} alt="user image"/>
                            </div>

                            <div class="testimonials__right__images__block">
                                <img src={user6} alt="user image"/>
                            </div>

                            <span class="testimonials__right__images__clients">250,00+</span>
                        </div>
                        <div class="testimonials__right__rating">
                            <span class="testimonials__right__rating__avg">4.9</span>
                            <span class="testimonials__right__rating__stars">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>
                            </span>
                            <span class="testimonials__right__rating__total">(4,582)</span>
                        </div>
                        <h3 class="testimonials__right__link">
                            <a href="#">Let's talk about your next project?</a>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
          </section>
        );
    }
}

export default Customersay;