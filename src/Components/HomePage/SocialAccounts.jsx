import React from "react";
import Hackerrank from "/SocialMediaAccounts/hackerrank.png"
import Github from "/SocialMediaAccounts/github.png"
import FreeCodeCamp from "/SocialMediaAccounts/free-code-camp.png"
import Leetcode from "/SocialMediaAccounts/leetcode.png"
import Linkedin from "/SocialMediaAccounts/linkedin.png"
export default class SocialAccounts extends React.Component {
    render(){
        return(
            <section id="about-me">
                <h2 className="about-me-title">My Social Media Accounts</h2>
                <div className="social-accounts-div">
                    <a className="social-accounts-a" target="_blank" rel="noopener" href="https://www.linkedin.com/in/doruk-aytekin-9874a4227/"><img className="platform-img" src={Linkedin} loading="lazy" title="Doruk Aytekin Linkedin" alt="Doruk Aytekin Linkedin" width={300} height={400} /></a>
                    <a className="social-accounts-a" target="_blank" rel="noopener" href="https://github.com/DorukAytekin07?tab=repositories"><img className="platform-img" src={Github} loading="lazy" title="Doruk Aytekin Github" alt="Doruk Aytekin Github" width={300} height={400} /></a>
                    <a className="social-accounts-a" target="_blank" rel="noopener" href="https://leetcode.com/DorukAytekin07/"><img className="platform-img" src={Leetcode} loading="lazy" title="Doruk Aytekin Leetcode" alt="Doruk Aytekin Leetcode" width={300} height={400} /></a>
                    <a className="social-accounts-a" target="_blank" rel="noopener" href="https://www.hackerrank.com/DorukAytekin07"><img className="platform-img" src={Hackerrank} loading="lazy" title="Doruk Aytekin Hackerrank" alt="Doruk Aytekin Hackerrank" width={300} height={400} /></a>
                    <a className="social-accounts-a" target="_blank" rel="noopener" href="https://www.freecodecamp.org/fccbbb41197-0e3f-4902-9e16-f395cd5b21ed"><img className="platform-img" src={FreeCodeCamp} loading="lazy" title="Doruk Aytekin FreeCodeCamp" alt="Doruk Aytekin Free Code Camp" width={300} height={400} /></a>
                </div>
            </section>
        );
    }
}