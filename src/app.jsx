import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/login';
import { Profile } from './profile/profile';
import { Ratings } from './ratings/ratings';
import { Review } from './review/review';
import { AuthState } from './home/authState';


export default function App() {

    const [userName, setUserName] = React.useState(localStorage.getItem('username') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    return (
    <BrowserRouter>
    <div className="body bg-dark text-light">
        <header className="container-fluid">
            <nav className="navbar fixed-top navbar-dark">
                <NavLink className="navbar-brand" to="login">Cinevaluate</NavLink>
                <menu className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="login">Home</NavLink>
                    </li>
                    {authState === AuthState.Authenticated && (
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="ratings">Ratings</NavLink>
                    </li>
                    )}
                    {authState === AuthState.Authenticated && (
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="review">Review</NavLink>
                    </li>
                    )}
                    {authState === AuthState.Authenticated && (
                    <li className="nave-item">
                        <NavLink className="nav-link active" to="profile">Profile</NavLink>
                    </li>
                    )}
                </menu>
            </nav>
        </header>

        <Routes>
            <Route
            path='/'
            element={
                <Home
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                    setAuthState(authState);
                    setUserName(userName);
                }}
            />
            }
            exact
            />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ratings" element={<Ratings />} />
            <Route path="/review" element={<Review />} />
            <Route path="*" element={<NotFound />} />
        </Routes>


        <footer >
            <div className="container-fluid">
            <span className="text-reset">Jacob Hall</span>
            <a className="text-reset" href="https://github.com/jacob-hall25/startup.git">GitHub</a>
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