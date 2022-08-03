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
            <NavBarButton title='Greetings' section='introduction' />
            <NavBarButton title='Background' section='background' />
            <NavBarButton title='Samples' section='samples' />
        </div>
    )
}

export default NavBar;