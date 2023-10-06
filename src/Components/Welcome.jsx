import React from "react";
export default class Welcome extends React.Component {
    render(){
        return(
            <section id="home" className="home-text ">
                <h2 className="home-text-title fade-in">Hello I am Doruk</h2>
                <p className="home-text-desc slide-up">a Software Engineer</p>
            </section>
        );
       
    }
}