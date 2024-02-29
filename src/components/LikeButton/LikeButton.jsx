import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './../Home/BookCard.css';
import { useEffect, useState, useParams } from 'react';
import Popup from 'reactjs-popup';
import { useUser } from "@clerk/clerk-react";
import { updateUserLikedList } from '../../services/users';


const LikeButton = () => {

    const { bookId } = useParams();
    const { isSignedIn, user } = useUser();
    const [liked, setLiked] = useState(false)

    const handleLike = async () => {
        setLiked(!liked)
        console.log(`Like when clicked: ${liked}`)

        if (liked) {
            updateUserLikedList(user.id, bookId, "like")
        }
        else {
            updateUserLikedList(user.id, bookId, "unlike")
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