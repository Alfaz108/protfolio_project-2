import React from "react";
import './style.css'
import image2 from '../src/images/projects/project1.jpg';

class Project extends React.Component{
    render(){
        return(
            <section>
           <section class="project" id="project">
      <div class="container">
        <h1 class="heading">Project</h1>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div class="project__card">
              <div class="project__card__images">
                <img src={image2} alt="project1" />
              </div>
              <div class="project__card__layer">
                <div class="project__card__layer__contents">
                  <h3 class="project__card__layer__contents__title">
                    Ecommarce Application
                  </h3>
                  <span class="project__card__layer__contents__tools"
                    >Node Js, Express Js, MongoDB, React Js</span
                  >
                </div>
                <div class="project__card__layer__link">
                  <a href="javascript:void(0)">
                    <i class="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div class="project__card">
              <div class="project__card__images">
                <img src={image2} alt="project1" />
              </div>
              <div class="project__card__layer">
                <div class="project__card__layer__contents">
                  <h3 class="project__card__layer__contents__title">
                    Ecommarce Application
                  </h3>
                  <span class="project__card__layer__contents__tools"
                    >Node Js, Express Js, MongoDB, React Js</span
                  >
                </div>
                <div class="project__card__layer__link">
                  <a href="javascript:void(0)">
                    <i class="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div class="project__card">
              <div class="project__card__images">
                <img src={image2} alt="project1" />
              </div>
              <div class="project__card__layer">
                <div class="project__card__layer__contents">
                  <h3 class="project__card__layer__contents__title">
                    Ecommarce Application
                  </h3>
                  <span class="project__card__layer__contents__tools"
                    >Node Js, Express Js, MongoDB, React Js</span
                  >
                </div>
                <div class="project__card__layer__link">
                  <a href="javascript:void(0)">
                    <i class="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div class="project__card">
              <div class="project__card__images">
                <img src={image2} alt="project1" />
              </div>
              <div class="project__card__layer">
                <div class="project__card__layer__contents">
                  <h3 class="project__card__layer__contents__title">
                    Ecommarce Application
                  </h3>
                  <span class="project__card__layer__contents__tools"
                    >Node Js, Express Js, MongoDB, React Js</span
                  >
                </div>
                <div class="project__card__layer__link">
                  <a href="javascript:void(0)">
                    <i class="bi bi-github"></i>
                  </a>
                </div>
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

export default Project;