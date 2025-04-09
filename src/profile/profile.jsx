import React from 'react';
import { NavLink } from 'react-router-dom';
import './profile.css';

export function Profile(props) {

    const [movies, setMovies] = React.useState([]);

    const socket = React.useMemo(() => {
        const port = window.location.port;
        const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
        return new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
    }, []);

    React.useEffect(() => {
        async function fetchMovies() {
            try {
                let allMovies = [];

                for (let page = 1; page <= 5; page++) {
                    const response = await fetch('/api/poster' , {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ page }),
                    }
                );

                // call the function from backend to get the movies

                    const data = await response.json();

                    if (data.results) {
                        allMovies = allMovies.concat(data.results);
                    }
                }
                const shuffledMovies = allMovies.sort(() => 0.5 - Math.random());

                const randomMovies = shuffledMovies.slice(0, 10).map(movie => ({
                    title: movie.title,
                    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                }));

                setMovies(randomMovies);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        }

        fetchMovies(); 

        // const socket = new WebSocket('ws://localhost:4000');
       

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'new_review') {
                const { username, movieName, rating, percentageRating, comments } = data.review;
                alert(`🎬 ${username} just reviewed ${movieName} with a ${percentageRating} percent rating!`);
            }
        };

        return () => socket.close();
    }, [socket]); 


  return (
    <main className="container-fluid text-center profile-container">
        <hr />
            <div className="profile-header">
                <h1 className="username">{props.username}</h1>
                <NavLink to="/login" className="logout-link">Logout</NavLink>
            </div>
            <h3>Popular Movies</h3>
            <div className="movie-quote-list">
                {movies.length > 0 ? (
                    movies.map((movie, index) => (
                        <div className="movie-quote-card" key={index}>
                            <h4>{movie.title}</h4>
                            {movie.poster ? (
                                <img src={movie.poster} alt={movie.title} width="100" />
                            ) : (
                                <p>No poster available</p>
                            )}
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
                {/* <div className="movie-quote-card">
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
                </div> */}
            </div>
        </main>
  );
}
