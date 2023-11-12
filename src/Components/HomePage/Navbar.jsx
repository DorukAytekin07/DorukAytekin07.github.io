import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
export default class Navbar extends React.Component {
    render(){
        return (
           <section className='nav-bar'>
            <h2 className='nav-bar-p'>Doruk Aytekin</h2>
            <ul className='nav-links'>
                <li><Link to="/#home">Home</Link></li>
                <li><Link to="/#works">Work</Link></li>
                <li><Link to="/#about-me">About Me</Link></li>

            </ul>
        </section> 
        );
        
    }
}