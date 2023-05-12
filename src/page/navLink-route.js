import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import Produts from './produts';
import Home from './home';
import About from './About';

export default function NavLinkRoutes() {
    return (
        <div>
            <BrowserRouter>
            <nav class="navbar navbar-expand-sm bg-light">
                    <div class="container-fluid">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NavLink to="/" className="nav-link active" href="#">
                                    Home
                                </NavLink>
                            </li>

                            <li class="nav-item">
                                <NavLink to="/produts" className="nav-link active" href="#">
                                    produts
                                </NavLink>
                            </li>

                            <li class="nav-item">
                                <NavLink to="/About" className="nav-link active" href="#">
                                    About
                                </NavLink>
                            </li>

                            <li class="nav-item">
                                <NavLink className="nav-link" href="#">
                                    Link
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/produts" element={<Produts />} />
                    <Route path="/About" element={<About/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
