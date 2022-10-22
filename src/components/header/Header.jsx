import React, { useState } from 'react'
import Container from '../container/Container'
import './Header.scss'

export default function Header() {

    const [mobileOn, setMobileOn] = useState(false)

    const handleMenu = () => {
        setMobileOn(prev => !prev)
    }

    return (
        <div className="header">
            <Container padding={135}>
                <div className="logo">C</div>
                <div onClick={handleMenu} className="burger">
                    <span></span>
                    <span></span>
                </div>
                <nav className={mobileOn ? 'menu-mobile' : 'menu-mobile mobileActive'}>
                    <div onClick={handleMenu} className="close">
                        <span></span>
                        <span></span>
                    </div>
                    <ul>
                        <li className="menu-item"><a href=".">Activities</a></li>
                        <li className="menu-item"><a href=".">Technology</a></li>
                        <li className="menu-item"><a href=".">R&D</a></li>
                        <li className="menu-item"><a href=".">Community</a></li>
                        <li className="menu-item btn-item"><a href=".">Career <span>&#8594;</span></a></li>
                    </ul>
                </nav>
                <nav className="menu">
                    <ul>
                        <li className="menu-item"><a href=".">Activities</a></li>
                        <li className="menu-item"><a href=".">Technology</a></li>
                        <li className="menu-item"><a href=".">R&D</a></li>
                        <li className="menu-item"><a href=".">Community</a></li>
                        <li className="menu-item btn-item"><a href=".">Career <span>&#8594;</span></a></li>
                    </ul>
                </nav>
            </Container>
        </div>
    )
}
