import { useEffect, useState } from "react"

const AllReviews = ({book_id}) => {

    const [reviewsList, setReviewsList] = useState([])

    useEffect

    return (
        <div className="reviews-container">
            <div className="single-review">
                <h5 className="review-title">Test</h5>
                <p className="review-content">Review desc</p>
                <p className="review-rating">5 start</p>
                <p className="review-user">User</p>
                <p>Date</p>
            </div>
        </div>
    )
}

export default AllReviews;