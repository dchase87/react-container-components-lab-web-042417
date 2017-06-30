import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

const NYT_API_KEY = '53b52334c3e749d29a77cdd1750e6a81';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(reviews => this.setState({ reviews: reviews.results }))
  }

  render() {
    return <div className="latest-movie-reviews"><h1>Latest Movie Reviews:</h1><MovieReviews reviews={this.state.reviews} /></div>
  }
}

export default LatestMovieReviewsContainer
