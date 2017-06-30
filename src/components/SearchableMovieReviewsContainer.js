import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

const NYT_API_KEY_TAG = 'api-key=53b52334c3e749d29a77cdd1750e6a81';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/reviews/search.json?query='

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: [],
      searchTerm: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
    fetch(BASE_URL + this.state.searchTerm + NYT_API_KEY_TAG)
      .then(resp => resp.json())
      .then(reviews => this.setState({ reviews: reviews.results }))
      .then(this.setState({clicked: !this.state.clicked}))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        {this.state.clicked === false ?
          <div>
            <h1>Search for NYT Movie Reviews</h1>
            <form>
              <input type="text" name="review"/>
              <button type="submit" onClick={this.handleClick}>Search</button>
            </form>
          </div> :
        <MovieReviews reviews={this.state.reviews} />}
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
