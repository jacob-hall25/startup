import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
    <div className="body bg-dark text-light">
        <header className="container-fluid">
            <nav className="navbar fixed-top navbar-dark">
                <a className="navbar-brand" href="index.html">Cinevaluate</a>
                <menu className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="ratings.html">Ratings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="review.html">Review</a>
                    </li>
                    <li className="nave-item">
                        <a className="nav-link" href="profile.html">Profile</a>
                    </li>
                </menu>
            </nav>
        </header>

        <main>app components go here</main>

        <footer >
            <div className="container-fluid">
            <span className="text-reset">Jacob Hall</span>
            <a className="text-reset" href="https://github.com/jacob-hall25/startup.git">GitHub</a>
            <br />
            </div>
        </footer>
    </div>
    );
}
