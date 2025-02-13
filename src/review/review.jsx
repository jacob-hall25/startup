import React from 'react';
import './review.css';

export function Review() {
  return (
    <main className="container-fluid text-center">
        <hr />
            <h1>Review</h1>
            <div className="review-container">
                <form method="get" action="ratings.html">
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
                    <button type="submit" className="btn btn-primary">Post Review</button>
                </form>
            </div>
        </main>
    );
}