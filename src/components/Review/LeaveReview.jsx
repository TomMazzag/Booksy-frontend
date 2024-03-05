import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ReviewBox = (book_id) => {

    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const [rating, setRating] = useState()

    
    const addRating = (star, rating) => {
        console.log("Add rating")
        let stars = document.querySelectorAll(".star")
        stars[star - 1].setAttribute("selected", "true")
        for (let i = 5; i >= rating; i--) {
            if (i > rating) {
                stars[5 - i].removeAttribute("selected")
            }
        }
        setRating(rating)
    }

    return (
        <div className="review-box">
            <h3>Leave a review</h3>
            <form action="">
                <label htmlFor="">Title</label>
                <input 
                    type="text" 
                    className='user-review-title' 
                    placeholder='Review title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    maxLength="25"
                />
                <label htmlFor="">Content</label>
                <input 
                    type="text" 
                    placeholder='Share your thoughts about the book...' 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <label htmlFor="">Rating</label>
                <div className="stars-container"> {/* Rating is reversed because container is reversed */}
                    <FontAwesomeIcon icon={faStar} className='star' onClick={() => addRating(1, 5)}/>
                    <FontAwesomeIcon icon={faStar} className='star' onClick={() => addRating(2, 4)}/>
                    <FontAwesomeIcon icon={faStar} className='star' onClick={() => addRating(3, 3)}/>
                    <FontAwesomeIcon icon={faStar} className='star' onClick={() => addRating(4, 2)}/>
                    <FontAwesomeIcon icon={faStar} className='star' onClick={() => addRating(5, 1)}/>
                </div>
                <button className='share-review'>Share</button>
            </form>
        </div>
    )
}

export default ReviewBox