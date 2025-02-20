import React from 'react';
import './profile.css';

export function Profile() {
  return (
    <main className="container-fluid text-center profile-container">
        <hr />
            <div className="profile-header">
                <h1 className="username">bubba_hall25</h1>
                    <form method="get" action="index.html" style={{ display: "inline"}}>
                        <button type="submit">Logout</button>
                    </form>
            </div>
            <h3>Famous Movies and Quotes</h3>
            <div className="movie-quote-list">
                <div className="movie-quote-card">
                    <h4>1. Se7en</h4>
                    <img src="https://tinyurl.com/4tvma26z" alt="Se7en" width="100" />
                    <p>"What's in the box?"</p>
                </div>
                <div className="movie-quote-card">
                    <h4>2. Mystic River</h4>
                    <img src="https://tinyurl.com/m2jtss8d" alt="Mystic River" width="100" />
                    <p>"Is that my daughter in there?"</p>
                </div>
                <div className="movie-quote-card">
                    <h4>3. Gladiator</h4>
                    <img src="https://tinyurl.com/4zb8pz5d" alt="Gladiator" width="100" />
                    <p>"Are you not entertained?"</p>
                </div>
                <div className="movie-quote-card">
                    <h4>4. There Will Be Blood</h4>
                    <img src="https://tinyurl.com/bdhsph9e" alt="There Will Be Blood" width="100" />
                    <p>"I drink your milkshake!"</p>
                </div>
            </div>
        </main>
  );
}
