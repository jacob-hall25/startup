import React from 'react';
import './ratings.css';

export function Ratings() {
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
                    <tr>
                        <td>bubba_hall25</td>
                        <td>Sicario</td>
                        <td>5/7</td>
                        <td>90%</td>
                        <td>intense and deserving of its high ratings</td>
                    </tr>
                    <tr>
                        <td>swg12</td>
                        <td>Inception</td>
                        <td>7/7</td>
                        <td>93%</td>
                        <td>did the top fall?</td>
                    </tr>
                    <tr>
                        <td>lil_bean</td>
                        <td>The Dark Knight</td>
                        <td>6/7</td>
                        <td>95%</td>
                        <td>Heath Ledger's performance is legendary</td>
                    </tr>
                    <tr>
                        <td>cinelover_3000</td>
                        <td>The Departed</td>
                        <td>6/7</td>
                        <td>92%</td>
                        <td>a classNameic crime drama</td>
                    </tr>
                    <tr>
                        <td>moviebuff</td>
                        <td>The Shawshank Redemption</td>
                        <td>7/7</td>
                        <td>100%</td>
                        <td>a must-watch</td>
                    </tr>
                    <tr>
                        <td>twirley13</td>
                        <td>Interstellar</td>
                        <td>6/7</td>
                        <td>95%</td>
                        <td>a visually stunning film</td>
                    </tr>
                    <tr>
                        <td>favorite_behe</td>
                        <td>Goodfellas</td>
                        <td>6/7</td>
                        <td>94%</td>
                        <td>a classNameic mob movie</td>
                    </tr>
                    <tr>
                        <td>bubba_hall25</td>
                        <td>Whiplash</td>
                        <td>6/7</td>
                        <td>96%</td>
                        <td>a thrilling and intense film</td>
                    </tr>

                </tbody>
            </table>
        </main>
    );
}