import React from "react";
import './style.css'

class Nab extends React.Component{
    render(){
        return(
           
            <section>
        <nav className="nav" id="nav">
      <div className="nav__wrapper">
        <div className="nav__wrapper__logo">
          <a href="#header" className="nav__wrapper__logo__brand">Alfaz</a>
        </div>
        <ul className="nav__wrapper__ul">
          <li className="nav__wrapper__ul__li">
            <a href="#header" className="nav__wrapper__ul__li__a active">Home</a>
          </li>
          <li className="nav__wrapper__ul__li">
            <a href="#about" className="nav__wrapper__ul__li__a">About</a>
          </li>
          <li className="nav__wrapper__ul__li">
            <a href="#education" className="nav__wrapper__ul__li__a">Experiance</a>
          </li>
          <li className="nav__wrapper__ul__li">
            <a href="#project" className="nav__wrapper__ul__li__a">Project</a>
          </li>
          <li className="nav__wrapper__ul__li">
            <a href="#blogs" className="nav__wrapper__ul__li__a">Blogs</a>
          </li>
        </ul>
        <div className="nav__wrapper__toggle">
          <i className="bi bi-text-right"></i>
        </div>
      </div>
    </nav>
            </section>

            
        

        );
    }
}

export default Nab;