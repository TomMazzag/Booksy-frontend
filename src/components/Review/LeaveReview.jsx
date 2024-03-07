import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { sendNewReview } from '../../services/reviews';
import { useUser } from '@clerk/clerk-react';

const ReviewBox = ({book_id, setNewReview}) => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [rating, setRating] = useState(0)
    const [disableShare, setDisableShare] = useState(true)
    const { user } = useUser()
    
    const addRating = (star, rating) => {
        let stars = document.querySelectorAll(".star")
        stars[star - 1].setAttribute("selected", "true")
        for (let i = 5; i >= rating; i--) {
            if (i > rating) {
                stars[5 - i].removeAttribute("selected")
            }
        }
        setRating(rating)
    }

    useEffect(() => {
        if (title === "" || content === "" || rating <= 0) {
            setDisableShare(true)
        } else {
            setDisableShare(false)
        }
    }, [title, content, rating])

    const addReview = () => {
        // console.log(book_id)
        const review = {
            book_id: book_id,
            user_id: user.id,
            title,
            content,
            rating,
        }
        try {
            sendNewReview(review)
            setTitle("")
            setContent("")
            setNewReview(true)
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <div className="review-box">
            <h3>Leave a review</h3>
            <form action="" onSubmit={(e) => e.preventDefault()}>
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
                <button onClick={addReview} className={`share-review ${disableShare ? 'disabled' : ''}`} disabled={disableShare}>Share</button>
            </form>
        </div>
    )
}

export default ReviewBox