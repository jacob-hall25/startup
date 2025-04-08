import React from 'react';
import './ratings.css';

export function Ratings() {
    const [movieReview, setMovieReview] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/ratings', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
            .then((response) => response.json())
            .then((ratings) => {
                const reversed = ratings.reverse();
                setMovieReview(reversed.slice(0,10));
            })
            .catch((error) => {
                console.error('Error fetching ratings:', error);
            });

            const socket = new WebSocket('ws://localhost:4000');

            socket.onmessage = (event) => {
                const data = JSON.parse(event.data);
                if (data.type === 'new_review') {
                    setMovieReview((prevReviews) => {
                        const updated = [data.review, ...prevReviews];
                        return updated.slice(0,10);
                    });
                    const { username, movieName, rating, percentageRating, comments } = data.review;
                    alert(`🎬 ${username} just reviewed ${movieName} with a ${percentageRating} percent rating!`);
                }
            };

            return () => socket.close();
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
                        movieReview.slice(0,10).map((review, index) => (
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