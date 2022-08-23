import React from 'react';

export default function Header() {
    return (
        <nav className='navigation'>
            <div className='leftSide'>
                <img src='../images/headerLogo.png' alt='logo' className="headerLogo"/>
                <h1>Meme Generator</h1>
            </div>
            <h4 className='headerText'>React Project</h4>
        </nav>
    )
}