import React from "react";
import Home from "./home";
import Nab from "./nab";
import Bio from "./Bio";
import Education from "./Education";
import Project from "./Project";
import Skill from "./Skill";
import Customersay from "./Customersay";
import Blogs from "./Blogs";
import Contact from "./Contact";

class App extends React.Component{
    render(){
        return(

            <section>
                <Nab/>
                <Home/>
                <Bio/>
                <Education/>
                <Project/>
                <Skill/>
                <Customersay/>
                <Blogs/>
                <Contact/>
            </section>

        );
    }
}

export default App;