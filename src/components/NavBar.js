import React from "react";
import '../App.css';

const NavBarButton = ({ title, section }) => {
    return (
        <a className='navBarLink' href={`#${section}`}>
            <div className='navBarButton'>
                <p className='navBarText'>{title}</p>
            </div>
        </a>
    );
}

const NavBar = () => {
    return (
        <div className='navBar'>
            <NavBarButton title='Greetings' section='' />
            <NavBarButton title='My Background' section='backgroundSection' />
            <NavBarButton title='Questions, Probably' section='questionsSection' />
            <NavBarButton title='Samples' section='samplesSection' />
        </div>
    )
}

export default NavBar;