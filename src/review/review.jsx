import React from 'react';
import './review.css';

import { NavLink } from 'react-router-dom';

export function Review() {

    const [movieName, setMovieName] = React.useState("");
    const [rating, setRating] = React.useState(0);
    const [percentageRating, setPercentageRating] = React.useState(0);
    const [comments, setComments] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (rating < 1 || rating > 7) {
            alert("Rating must be between 1 and 7");
            return;
        }

        const newReview = {movieName, rating, percentageRating, comments};

        const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

        reviews.push(newReview);

        localStorage.setItem("reviews", JSON.stringify(reviews));

        setMovieName("");
        setRating(0);
        setPercentageRating(0);
        setComments("");

        window.location.href = "ratings.jsx";
    };

  return (
    <main className="container-fluid text-center">
        <hr />
            <h1>Review</h1>
            <div className="review-container">
                    <h2>Post a Review</h2>
                    <div className="form-group">
                        <span> &#127909;Movie Name </span>
                        <input type="text" placeholder="movie name here" className="form-control" />
                    </div>
                    <div className="form-group">
                        <span> &#127775; Rating</span>
                        <input type="number" placeholder="0-7 stars" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <span> &#128175; Percentage Rating </span>
                        <input type="number" placeholder="0-100%" className="form-control" />
                    </div>

                    <div className="form-group">
                        <span> &#128172; Comments </span>
                        <input type="text" placeholder="comments here" className="form-control"/>
                    </div>
                    <br />
                    <NavLink to="/ratings" className="post-review-link" >Post Review</NavLink>
            </div>
        </main>
    );
}