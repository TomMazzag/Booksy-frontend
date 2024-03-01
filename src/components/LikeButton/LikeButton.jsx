import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './../Home/BookCard.css';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { useUser } from "@clerk/clerk-react";
import { updateUserLikedList } from '../../services/users';
import { checkLikedBook } from '../../services/users';

const LikeButton = () => {

    const { bookId } = useParams();
    const { isSignedIn, user } = useUser();
    const [liked, setLiked] = useState(liked)

    // need a function to check if it is liked

    if (checkLikedBook) {
        liked == true
    } else {
        liked == false
    }

    const handleLike = async () => {
        setLiked(!liked)
        console.log(`Like when clicked: ${liked}`)

        if (liked) {
            updateUserLikedList(user.id, bookId, "like")
            console.log("Sent like to DB")
        }
        else {
            updateUserLikedList(user.id, bookId, "unlike")
            console.log("Sent unlike to DB")
        }

        }

        return (
            <div>
                <button className="btn btn-outline-danger" onClick={handleLike}>
                    <FontAwesomeIcon icon={faHeart} /> 
                    {liked? "":" Save for later"}
                </button>
            </div>
        )}
    
    // if (isSignedIn) {
    //     return (
    //         <div>
    //             <button className="btn btn-outline-danger" onClick={handleLike}>
    //                 <FontAwesomeIcon icon={faHeart} /> 
    //                 {liked?"":" Save for later"}
    //             </button>
    //         </div>
    //     )}
    // else {
    //     return (
    //         <div>
    //             <Popup trigger={(
    //             <button className="btn btn-outline-danger" onClick={handleLike}>
    //                 <FontAwesomeIcon icon={faHeart} /> 
    //                 {liked ? "" : " Save for later"}
    //                 </button>
    //                 )} position="right center">
    //                 {/* {"You need to be logged in to make an account"} */}
    //             <div>You must be logged in to create a wishlist.</div>
    //         </Popup>
    //     </div>
    //     )}
    


export default LikeButton