import React from 'react';
import './profile.css';

import { NavLink } from 'react-router-dom';



export function Profile() {
    const [username, setUsername] = React.useState("bubba_hall25");
    const [movie1Title, setMovie1Title] = React.useState("Se7en");
    const [movie1Image, setMovie1Image] = React.useState("https://tinyurl.com/4tvma26z");
    const [movie1Quote, setMovie1Quote] = React.useState("What's in the box?");
    const [movie2Title, setMovie2Title] = React.useState("Mystic River");
    const [movie2Image, setMovie2Image] = React.useState("https://tinyurl.com/m2jtss8d");
    const [movie2Quote, setMovie2Quote] = React.useState("Is that my daughter in there?");
    const [movie3Title, setMovie3Title] = React.useState("Gladiator");
    const [movie3Image, setMovie3Image] = React.useState("https://tinyurl.com/4zb8pz5d");
    const [movie3Quote, setMovie3Quote] = React.useState("Are you not entertained?");
    const [movie4Title, setMovie4Title] = React.useState("There Will Be Blood");
    const [movie4Image, setMovie4Image] = React.useState("https://tinyurl.com/bdhsph9e");
    const [movie4Quote, setMovie4Quote] = React.useState("I drink your milkshake!");

    React.useEffect(() => {
        setUsername("bubba_hall25");
        setMovie1Title("Se7en");
        setMovie1Image("https://tinyurl.com/4tvma26z");
        setMovie1Quote("What's in the box?");
        setMovie2Title("Mystic River");
        setMovie2Image("https://tinyurl.com/m2jtss8d");
        setMovie2Quote("Is that my daughter in there?");
        setMovie3Title("Gladiator");
        setMovie3Image("https://tinyurl.com/4zb8pz5d");
        setMovie3Quote("Are you not entertained?");
        setMovie4Title("There Will Be Blood");
        setMovie4Image("https://tinyurl.com/bdhsph9e");
        setMovie4Quote("I drink your milkshake!");
    }, []);

  return (
    <main className="container-fluid text-center profile-container">
        <hr />
            <div className="profile-header">
                <h1 className="username">{username}</h1>
                <NavLink to="/login" className="logout-link">Logout</NavLink>
            </div>
            <h3>Famous Movies and Quotes</h3>
            <div className="movie-quote-list">
                <div className="movie-quote-card">
                    <h4>{movie1Title}</h4>
                    <img src={movie1Image} alt="random-movie" width="100" />
                    <p>{movie1Quote}</p>
                </div>
                <div className="movie-quote-card">
                    <h4>{movie2Title}</h4>
                    <img src={movie2Image} alt="random-movie" width="100" />
                    <p>{movie2Quote}</p>
                </div>
                <div className="movie-quote-card">
                    <h4>{movie3Title}</h4>
                    <img src={movie3Image} alt="random-movie" width="100" />
                    <p>{movie3Quote}</p>
                </div>
                <div className="movie-quote-card">
                    <h4>{movie4Title}</h4>
                    <img src={movie4Image} alt="random-movie" width="100" />
                    <p>{movie4Quote}</p>
                </div>
            </div>
        </main>
  );
}
