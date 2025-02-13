import React from 'react';

export function Home() {
  return (
    <main className="container-fluid text-center">
            <div>
                <h1>Watch it, rate it, Cinevaluate it!</h1>
                <form method="get" action="profile.html">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Username</span>
                        <input className="form-control" type="text" placeholder="username or email here" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Password</span>
                        <input className="form-control" type="password" placeholder="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <button type="submit" className="btn btn-secondary">Create account</button>
                </form>
                </div>
        </main>
    );
}