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
            <h3>Top 6 Movies</h3>
            <div className="movie-list">
                <div className="movie-card">
                    <span style={{display: "inline-block", marginRight: "20px", textAlign: "center"}}>
                        <h4 style={{ display: "inline"}}>1. Se7en </h4>
                        <br />
                        <img src="https://tinyurl.com/4tvma26z" alt="Se7en" width="100" />
                    </span>
                </div>
                <div className="movie-card">
                    <span style={{display: "inline-block", marginRight: "20px", textAlign: "center"}}>
                        <h4 style={{ display: "inline"}}>2. Mystic River </h4>
                        <br />
                        <img src="https://tinyurl.com/m2jtss8d" alt="Mystic River" width="100" />
                    </span>
                </div>
                <div className="movie-card">
                    <span style={{display: "inline-block", marginRight: "20px", textAlign: "center"}}>
                        <h4 style={{ display: "inline"}}>3. Gladiator</h4>
                        <br />
                        <img src="https://tinyurl.com/4zb8pz5d" alt="Gladiator" width="100" />
                    </span>
                    
                </div>
                <div className="movie-card">
                    <span style={{display: "inline-block", marginRight: "20px", textAlign: "center"}}>
                        <h4 style={{ display: "inline"}}>4. American Gangster </h4>
                        <br />
                        <img src="https://tinyurl.com/36uaya6h" alt="American Gangster" width="100" />
                    </span>
                </div>
                <div className="movie-card">
                    <span style={{display: "inline-block", marginRight: "20px", textAlign: "center"}}>
                        <h4 style={{ display: "inline"}}>5. Hell or High Water </h4>
                        <br />
                        <img src="https://tinyurl.com/2z8wksv3" alt="Interstellar" width="100" />
                    </span>
                </div>
                <div className="movie-card">
                    <span style={{display: "inline-block", marginRight: "20px", textAlign: "center"}}>
                        <h4 style={{ display: "inline"}}>6. There Will Be Blood </h4>
                        <br />
                        <img src="https://tinyurl.com/bdhsph9e" alt="There Will Be Blood" width="100" />
                    </span>
            </div>
        </div>
        </main>
  );
}
