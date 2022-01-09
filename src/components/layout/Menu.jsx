import React from 'react'
import './Menu.css'

const Menu = props => (
    <div className="Menu">
        <nav>
            <ul>
                <li>
                    <a href="/Home">Início</a>
                </li>
                <li>
                    <a href="/About">Sobre</a>
                </li>
            </ul>
        </nav>
    </div>
)

export default Menu