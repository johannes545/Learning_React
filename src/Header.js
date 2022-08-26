import React from "react";
import logo from "./react-logo.png"

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <img className="navbar_logo" src={logo} alt="This is the logo"/>
                <ul className="navbar_items">
                    <li>
                        Pricing
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </nav>
        </header>
    )
}