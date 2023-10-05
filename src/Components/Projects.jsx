import React from "react";
import MPP from "../../src/assets/img/projects/Personal_Page.webp"
import Converter from "../../src/assets/img/projects/Convert.webp";
import CSGO from "../../src/assets/img/projects/Cs Go.webp";
import MSL from "../../src/assets/img/projects/Library.webp";
import WWCG from "../../src/assets/img/projects/WW2 Catch Game.webp";
import AHS from "../../src/assets/img/projects/Amal Hawks Site.webp";

export default class Projects extends React.Component {
    render(){
        return(
            <section id="works">
                <h2 className="project-title">My Projects</h2>
                <div className="project-div">
                    <img className="project-img" src={MPP} alt="doruk aytekin" />
                    <p className="project-p">Personal Website</p>
                    <a className="project-a" href=""><p>Show More</p></a>
                </div>
                <div className="project-div">
                    <img className="project-img" src={Converter} alt="doruk aytekin" />
                    <p className="project-p">Converter</p>
                    <a className="project-a" href=""><p>Show More</p></a>
                </div>
                <div className="project-div">
                    <img className="project-img" src={MSL} alt="doruk aytekin" />
                    <p className="project-p">My Software Library</p>
                    <a className="project-a" href=""><p>Show More</p></a>
                </div>
                <div className="project-div">
                    <img className="project-img" src={WWCG} alt="doruk aytekin" />
                    <p className="project-p">WW2 Cacth Game</p>
                    <a className="project-a" href=""><p>Show More</p></a>
                </div>
                <div className="project-div">
                    <img className="project-img" src={CSGO} alt="doruk aytekin" />
                    <p className="project-p">Cs Go 2D Editon</p>
                    <a className="project-a" href=""><p>Show More</p></a>
                </div>
                <div className="project-div">
                    <img className="project-img" src={AHS} alt="doruk aytekin" />
                    <p className="project-p">Amal Hawks Website</p>
                    <a className="project-a" href=""><p>Show More</p></a>
                </div>
                
            </section>
        );
    }
}