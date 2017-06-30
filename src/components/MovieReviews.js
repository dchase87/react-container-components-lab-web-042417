import React from 'react'

const MovieReviews = ({ reviews }) => {
  MovieReviews.defaultProps = {
    reviews: []
  }

  return (
    <div className="review-list">
      {reviews.map(review =>
        <div className="review">
          <h2>Movie Title: {review.display_title} - Reviewed by: {review.byline}</h2>
          {review.critics_pick === 1 && <h4><strong>Critic's Pick!</strong></h4>}
          <h5>Publication Date: {review.publication_date}</h5>
          <p>Summary: {review.summary_short}</p>
        </div>)}
    </div>
  )
}

export default MovieReviews
