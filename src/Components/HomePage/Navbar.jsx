import React from 'react'
export default class Navbar extends React.Component {
    render(){
        return (
           <section className='nav-bar'>
            <h1 className='nav-bar-p'>Doruk Aytekin</h1>
            <ul className='nav-links'>
                <a href="##home">Home</a>
                <a href="##works">Work</a>
                <a href="##about-me">About Me</a>
            </ul>
        </section> 
        );
        
    }
}