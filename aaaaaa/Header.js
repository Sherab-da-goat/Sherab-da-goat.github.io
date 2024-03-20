import React from 'react';
import './Header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="logo">
               <a href="">VAN HOLTZ CO.</a> 
            </div>
            <div className="links">
                <div className="link-right">
                    <div className="info">
                        <ul>
                            <li>Studio of Eric Van Holtz</li>
                            <li>Web Developer</li>
                        </ul>
                        <ul>
                            <li>Portland Oregon</li>
                            <li>hello@vanholtz.co</li>
                        </ul>
                    </div>
                    <nav className="nav-links">
                        <ul>
                            <li className="about-li">
                                <span>01</span>
                                <strong>about</strong>
                            </li>
                            <li className="journal-li">
                                <span>02</span>
                                <strong>journal</strong>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="link-left">
                    <nav className="nav-links">
                        <ul>
                            <li className="about-li">
                                <span>01</span>
                                <strong>about</strong>
                            </li>
                            <li className="journal-li">
                                <span>02</span>
                                <strong>journal</strong>
                            </li>
                            <li className="about-li">
                                <span>01</span>
                                <strong>about</strong>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
