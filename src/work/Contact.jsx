import React from "react";
import './style.css'
import image1 from '../src/images/bg/Rumon3.png';

class Contact extends React.Component{
    render(){
        return(
            <section>
                
                <section class="footer" id="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-sm-12 col-xs-12">
                    <div class="footer__image">
                        <img src={image1} alt="developer image"/>
                        <span class="footer__image__label">Freelance Available</span>
                    </div>
                    <p class="footer__copyright">Copyright © <span class="year">2022</span> by <span
                            class="footer__copyright--name">Alfaz Bin Rumon</span>, All rights reserved</p>
                </div>
                <div class="col-md-7 col-sm-12 col-xs-12">
                    <form action="" class="form">
                        <h1 class="heading">contact me</h1>
                        <div class="row">
                            <div class="col-md-5 col-sm-12 col-xs-12">
                                <input type="text" class="form__control" placeholder="Name..."/>
                            </div>
                            <div class="col-md-5 col-sm-12 col-xs-12">
                                <input type="email" class="form__control" placeholder="Email..."/>
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <input type="text" class="form__control" placeholder="Subject..."/>
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <textarea name="" class="form__control" cols="30" rows="10"
                                    placeholder="Your message..."></textarea>
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <input type="submit" value="send email" class="btn btn-dark"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
          </section>
        );
    }
}

export default Contact;