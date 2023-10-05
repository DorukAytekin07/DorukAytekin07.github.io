import React from "react";
import Hackerrank from "../../src/assets/img/social-accounts/hackerrank.svg"
import Github from "../../src/assets/img/social-accounts/github.svg"
import FreeCodeCamp from "../../src/assets/img/social-accounts/free-code-camp.svg"
import Leetcode from "../../src/assets/img/social-accounts/leetcode.svg"
import Linkedin from "../../src/assets/img/social-accounts/linkedin.svg"
export default class SocialAccounts extends React.Component {
    render(){
        return(
            <section id="about-me">
                <h2 className="about-me-title">My Social Media Accounts</h2>
                <div className="social-accounts-div">
                    <a className="social-accounts-a" target="_blank" href="https://www.linkedin.com/in/doruk-aytekin-9874a4227/"><img src={Linkedin} alt="" /></a>
                    <a className="social-accounts-a" target="_blank" href="https://github.com/DorukAytekin07?tab=repositories"><img src={Github} alt="" /></a>
                    <a className="social-accounts-a" target="_blank" href="https://leetcode.com/horationelson1903/"><img src={Leetcode} alt="" /></a>
                    <a className="social-accounts-a" target="_blank" href="https://www.hackerrank.com/horationelson191"><img src={Hackerrank} alt="" /></a>
                    <a className="social-accounts-a" target="_blank" href="https://www.freecodecamp.org/fccbbb41197-0e3f-4902-9e16-f395cd5b21ed"><img src={FreeCodeCamp} alt="" /></a>
                </div>
            </section>
        );
    }
}