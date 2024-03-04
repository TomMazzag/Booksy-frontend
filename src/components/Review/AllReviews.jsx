import { useEffect, useState } from "react"
import { getAllReviewsForBook } from "../../services/reviews"
import "./Reviews.css"

const AllReviews = ({book_id}) => {

    const [reviewsList, setReviewsList] = useState([])

    useEffect(() => {
        getAllReviewsForBook(book_id)
        .then((response) => {
            setReviewsList(response.reviews)
        })
    }, [])

    return (
        <div className="reviews-container">
            {reviewsList.map((review, index) => (
                <div className="single-review" key={index}>
                    <h5 className="review-title">{review.title}</h5>
                    <p className="review-content">{review.content}</p>
                    <p className="review-rating">{review.rating} start</p>
                    <p className="review-user">{review.user_id.first_name}</p>
                    <p>Date</p>
                </div>
            ))}
        </div>
    )
}

export default AllReviews;