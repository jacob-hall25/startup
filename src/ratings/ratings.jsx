import React from 'react';
import './ratings.css';

export function Ratings() {
  return (
    <main className="container-fluid text-center">
        <hr />
            <h1 className="container-fluid text-center">User and Friend Ratings</h1>
            <p className="reviews">
                <ul>
                    <li><b>bubba_hall25:</b>  Sicario, 5/7, 90%, intense and deserving of its high ratings</li>
                </ul>
                <br />
                <ul>
                    <li><b>swg12:</b>  Inception 7/7, 93%, did the top fall?</li>
                </ul>
                <br />
                <ul>
                    <li><b>lil_bean:</b>  The Dark Knight, 6/7, 95%, Heath Ledger's performance is legendary</li>
                </ul>
                <br />
                <ul>
                    <li><b>cinelover_3000:</b>  The Departed, 6/7, 92%, a classNameic crime drama</li>
                </ul>
                <br />
                <ul>
                    <li><b>moviebuff:</b>  The Shawshank Redemption, 7/7, 100%, a must-watch</li>
                </ul>
                <br />
                <ul>
                    <li><b>twirley13:</b>  Interstellar, 6/7, 95%, a visually stunning film</li>
                </ul>
                <br />
                <ul>
                    <li><b>favorite_behe:</b>  Goodfellas, 6/7, 94%, a classNameic mob movie</li>
                </ul>
                <br />
                <ul>
                    <li><b>bubba_hall25:</b>  Whiplash, 6/7, 96%, a thrilling and intense film</li>
                </ul>
            </p>
        </main>
    );
}