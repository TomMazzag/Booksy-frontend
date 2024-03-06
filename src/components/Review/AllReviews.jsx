import { useEffect, useState } from "react"
import { getAllReviewsForBook } from "../../services/reviews"
import "./Reviews.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const AllReviews = ({book_id, newReview, setNewReview}) => {

    const [reviewsList, setReviewsList] = useState([])


    const dateFormatOptions = { 
        day: '2-digit', 
        month: 'long', 
        year: 'numeric' 
    }

    const formatDate = (dateString) =>  {
        const date = new Date(dateString)
        const formattedDate = date.toLocaleString("en-GB", dateFormatOptions)
        return formattedDate
    }

    const addRating = (rating) => {
        const stars = []
        for (let i = 1; i <= rating; i++) {
            stars.push(
                <FontAwesomeIcon 
                  key={i}
                  icon={faStar} 
                  style={{ color: '#FFD700' }}
                />
            )
        }
        return stars
    }

    useEffect(() => {
        getAllReviewsForBook(book_id)
        .then((response) => {
            setReviewsList(response.reviews)
            setNewReview(false)
        })
    }, [newReview])

    return (
        <div className="reviews-container">
            {reviewsList.length < 1 && <p>This book has no reviews yet, be the first to leave a reivew!</p>}
            {reviewsList.map((review, index) => (
                <div className="single-review" key={index}>
                    <h5 className="review-title">{review.title}</h5>
                    <p className="review-content">{review.content}</p>
                    <div className="review-rating">
                        {addRating(review.rating)}
                    </div>
                    <p className="review-user">{review.first_name} {review.last_name}</p>
                    <p className="review-date">{formatDate(review.createdAt)}</p>
                </div>
            ))}
        </div>
    )
}

export default AllReviews;