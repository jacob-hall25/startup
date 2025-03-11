import React from 'react';
import { NavLink } from 'react-router-dom';
import './profile.css';




export function Profile(props) {
    const MOVIE_KEY = '525|uIY6IfcUGyqB4QUNSaYIUuKb34lMjzBcu2wiP3Vb';

    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        async function fetchMovies() {
            try {
                const headers = new Headers();
                headers.append('Authorization', `${MOVIE_KEY}`);
                headers.append('Accept', 'application/json');

                const movieResponse = await fetch("https://api.movieposterdb.com/v1/posters", {
                    method: "GET",
                    headers: headers
                });

                const movieData = await movieResponse.json();

                if (!movieData || !movieData.data) {
                    throw new Error("No movie data found");
                }

                const movieDetails = await Promise.all(
                    movieData.data.map(async (movie) => {
                        const movieID = movie.id;
                        const movieTitle = movie.title;

                        const posterResponse = await fetch(`https://api.movieposterdb.com/v1/posters?id=${movieID}`, {
                            method: 'GET',
                            headers: headers
                        });
                        const posterData = await posterResponse.json();

                        if (!posterData || !posterData.data || posterData.data.length === 0) {
                            throw new Error("No poster data found");
                        }

                        return { title: movieTitle, poster: posterData.data[0].image };
                    })
                );

                setMovies(movieDetails);
            } catch (error) {
                console.error(error);
            }
        }

        fetchMovies(); 
    }, []); 


  return (
    <main className="container-fluid text-center profile-container">
        <hr />
            <div className="profile-header">
                <h1 className="username">{props.username}</h1>
                <NavLink to="/login" className="logout-link">Logout</NavLink>
            </div>
            <h3>Famous Movies</h3>
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
