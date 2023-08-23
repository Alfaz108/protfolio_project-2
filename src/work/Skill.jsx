import React from "react";
import './style.css'
import image1 from '../src/images/bg/user.jpg';

class Skill extends React.Component{
    render(){
        return(
            <section>
                
    <section class="skills" id="skills">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="skills__contents">
              <h1 class="skills__contents__heading">
                I have high skills in developing and programming
              </h1>
              <p class="skills__contents__message">
                I am working on a professional, visually sophisticated and
                technologically proficient, responsive and multi-functional
                personal portfolio template Shane.
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h1 class="heading">my skills</h1>
            <div class="skills__block">
              <span class="skills__block__exp">6 years</span>
              <span class="skills__block__list"
                >html, css &amp; javascript</span
              >
            </div>
            <div class="skills__block">
              <span class="skills__block__exp">6 years</span>
              <span class="skills__block__list"
                >html, css &amp; javascript</span
              >
            </div>
            <div class="skills__block">
              <span class="skills__block__exp">6 years</span>
              <span class="skills__block__list"
                >html, css &amp; javascript</span
              >
            </div>
            <div class="skills__block">
              <span class="skills__block__exp">6 years</span>
              <span class="skills__block__list"
                >html, css &amp; javascript</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
          </section>
        );
    }
}

export default Skill;