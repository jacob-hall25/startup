import React from 'react';
import './ratings.css';

export function Ratings() {
    const [movieReview, setMovieReview] = React.useState([]);


    React.useEffect(() => {
        const reviewsText = localStorage.getItem("reviews");
        if(reviewsText) {
            setMovieReview(JSON.parse(reviewsText));
        }
    }, []);

    const reviewRows = [];
    if(movieReview.length) {
        for (const [i, ,movie] of movieReview.entries()) {
            reviewRows.push(
                <tr key={i}>
                    <td>{movie.username}</td>
                    <td>{movie.movieName}</td>
                    <td>{movie.rating}</td>
                    <td>{movie.percentageRating}</td>
                    <td>{movie.comments}</td>
                </tr>
            );
        }
    }

    else {
        reviewRows.push(
            <tr key="0">
                <td colSpan="4">Enter a review!</td>
            </tr>
        );
    }
  return (
    <main className="container-fluid text-center">
        <hr />
            <h1 className="container-fluid text-center">User and Friend Ratings</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Movie</th>
                        <th>Rating</th>
                        <th>Percentage Rating</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody id="reviews">{movieReview}</tbody>
                    
            </table>
        </main>
    );
}