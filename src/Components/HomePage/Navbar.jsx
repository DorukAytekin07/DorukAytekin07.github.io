import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
export default class Navbar extends React.Component {
    render(){
        return (
           <section className='nav-bar'>
            <h2 className='nav-bar-p'>Doruk Aytekin</h2>
            <div className='nav-links'>
                <Link to="/#home">Home</Link>
                <Link to="/#works">Work</Link>
                <Link to="/#about-me">About Me</Link>
            </div>
        </section> 
        );
        
    }
}