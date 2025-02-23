import React from 'react';

import { NavLink } from 'react-router-dom';

export function Home() {
  return (
    <main className="container-fluid text-center">
            <div>
                <h1>Watch it, rate it, Cinevaluate it!</h1>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Username</span>
                        <input className="form-control" type="text" placeholder="username or email here" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Password</span>
                        <input className="form-control" type="password" placeholder="password" />
                    </div>
                    <NavLink to="/profile" className="login-link">Login</NavLink>
                    <NavLink to="/profile" className="create-account-link">Create account</NavLink>
            </div>
        </main>
    );
}