import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'


function Header() {
    return (
        <header>
            <BrowserRouter>
                <div className="first">
                    <img src="https://www.freetogame.com/assets/images/freetogame-logo.png" alt="" />
                    <Link to="">Games List</Link>
                    <Link to="">Special Offers</Link>
                    <Link to="">Top 2021</Link>
                    <button className="bars"><i class="fas fa-bars"></i></button>
                </div>
                <div className="second">
                    <Link to=""><i class="fas fa-search"></i></Link>
                    <Link to=""><i class="fas fa-gift"></i></Link>
                    <Link to=""><i class="fas fa-clone"></i></Link>
                    <a href="">Log In</a>
                    <button className="join">Join Free</button>
                </div>
            </BrowserRouter>
        </header>
    )
}

export default Header;