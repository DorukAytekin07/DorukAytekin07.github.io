import React from "react";
import Hackerrank from "../../assets/img/social-accounts/hackerrank.svg"
import Github from "../../assets/img/social-accounts/github.svg"
import FreeCodeCamp from "../../assets/img/social-accounts/free-code-camp.svg"
import Leetcode from "../../assets/img/social-accounts/leetcode.svg"
import Linkedin from "../../assets/img/social-accounts/linkedin.svg"
export default class SocialAccounts extends React.Component {
    render(){
        return(
            <section id="about-me">
                <h2 className="about-me-title">My Social Media Accounts</h2>
                <div className="social-accounts-div">
                    <a className="social-accounts-a" target="_blank" href="https://www.linkedin.com/in/doruk-aytekin-9874a4227/"><img src={Linkedin} alt="Doruk Aytekin Linkedin" /></a>
                    <a className="social-accounts-a" target="_blank" href="https://github.com/DorukAytekin07?tab=repositories"><img src={Github} alt="Doruk Aytekin Github" /></a>
                    <a className="social-accounts-a" target="_blank" href="https://leetcode.com/DorukAytekin07/"><img src={Leetcode} alt="Doruk Aytekin Leetcode" /></a>
                    <a className="social-accounts-a" target="_blank" href="https://www.hackerrank.com/DorukAytekin07"><img src={Hackerrank} alt="Doruk Aytekin Hackerrank" /></a>
                    <a className="social-accounts-a" target="_blank" href="https://www.freecodecamp.org/fccbbb41197-0e3f-4902-9e16-f395cd5b21ed"><img src={FreeCodeCamp} alt="Doruk Aytekin Free Code Camp"/></a>
                </div>
            </section>
        );
    }
}