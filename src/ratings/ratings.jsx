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
                <tbody>
                    {movieReview.length > 0 ? (
                        movieReview.map((review, index) => (
                            <tr key={index}>
                                <td>{review.username}</td>
                                <td>{review.movieName}</td>
                                <td>{review.rating}</td>
                                <td>{review.percentageRating}</td>
                                <td>{review.comments}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Enter a review!</td>
                        </tr>
                    )}
                </tbody>
                    
            </table>
        </main>
    );
}