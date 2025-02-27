import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import './authenticated.css';

export function Authenticated(props) {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('userName');
        props.onLogout();
    }

    return (
        <div>
            <div className='playerName'>{props.userName}</div>
            <Button 
            variant='primary' 
            onClick={() => navigate('/review')}
            className="login-link"
            >Review</Button>
            <Button 
            variant='secondary' 
            onClick={logout}
            className="create-account-link"
            >Logout</Button>
        </div>
    );
}