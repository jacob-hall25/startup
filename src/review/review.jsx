import React from 'react';
import './review.css';

import { useNavigate } from 'react-router-dom';

export function Review() {

    const [username, setUsername] = React.useState("");
    const [movieName, setMovieName] = React.useState("");
    const [rating, setRating] = React.useState("");
    const [percentageRating, setPercentageRating] = React.useState("");
    const [comments, setComments] = React.useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newReview = {username, movieName, rating, percentageRating, comments};


        fetch('/api/ratings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(newReview),
            })
            .then((response) => response.json())
            .then((updatedRatings) => {
                setUsername("");
                setMovieName("");
                setRating("");
                setPercentageRating("");
                setComments("");
                navigate("/ratings");
            })
            .catch((error) => {
                console.error('Error submitting review:', error);
            });

        };
    //     const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    //     reviews.push(newReview);

    //     localStorage.setItem("reviews", JSON.stringify(reviews));

    //     setUsername("");
    //     setMovieName("");
    //     setRating("");
    //     setPercentageRating("");
    //     setComments("");

    //     navigate("/ratings");
    // };

  return (
    <main className="container-fluid text-center">
        <hr />
            <h1>Review</h1>
            <div className="review-container">
                    <h2>Post a Review</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <span> &#128100;Username</span>
                            <input
                            type="text"
                            placeholder="username here"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required/>
                        </div>
                        <div className="form-group">
                            <span> &#127909;Movie Name </span>
                            <input 
                            type="text" 
                            placeholder="movie name here" 
                            className="form-control"
                            value={movieName}
                            onChange={(e) => setMovieName(e.target.value)}
                            required />
                        </div>
                        <div className="form-group">
                            <span> &#127775; Rating</span>
                            <input
                            type="text" 
                            placeholder="0-7 stars" 
                            className="form-control"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            required/>
                        </div>

                        <div className="form-group">
                            <span> &#128175; Percentage Rating </span>
                            <input 
                            type="text" 
                            placeholder="0-100%" 
                            className="form-control" 
                            value={percentageRating}
                            onChange={(e) => setPercentageRating(e.target.value)}
                            required/>
                        </div>

                        <div className="form-group">
                            <span> &#128172; Comments </span>
                            <input 
                            type="text" 
                            placeholder="comments here" 
                            className="form-control"
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            required/>
                        </div>
                    <br />
                    <button type="submit" className="post-review-link" >Post Review</button>
                </form>
            </div>
        </main>
    );
}