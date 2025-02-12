import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/login';
import { Profile } from './profile/profile';
import { Ratings } from './ratings/ratings';
import { Review } from './review/review';


export default function App() {
    return (
    <BrowserRouter>
    <div className="body bg-dark text-light">
        <header className="container-fluid">
            <nav className="navbar fixed-top navbar-dark">
                <NavLink className="navbar-brand" href="index.html">Cinevaluate</NavLink>
                <menu className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link active" href="index.html">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" href="ratings.html">Ratings</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" href="review.html">Review</NavLink>
                    </li>
                    <li className="nave-item">
                        <NavLink className="nav-link" href="profile.html">Profile</NavLink>
                    </li>
                </menu>
            </nav>
        </header>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ratings" element={<Ratings />} />
            <Route path="/review" element={<Review />} />
            <Route path="*" element={<NotFound />} />
        </Routes>


        <footer >
            <div className="container-fluid">
            <span className="text-reset">Jacob Hall</span>
            <NavLink className="text-reset" href="https://github.com/jacob-hall25/startup.git">GitHub</NavLink>
            <br />
            </div>
        </footer>
    </div>
    </BrowserRouter>
    );
}

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
  }