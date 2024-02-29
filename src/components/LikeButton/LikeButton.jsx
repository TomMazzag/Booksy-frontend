import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './../Home/BookCard.css';
import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { useUser } from "@clerk/clerk-react";


const LikeButton = () => {

    const { isSignedIn } = useUser();
    const [liked, setLiked] = useState(false)

    const handleLike = async ()=>{
        console.log(`Like when clicked: ${liked}`);
        setLiked(!liked)
        }

    
    if (isSignedIn) {
        return (
            <div>
                <button className="btn btn-outline-danger" onClick={handleLike}>
                    <FontAwesomeIcon icon={faHeart} /> 
                    {liked?"":" Save for later"}
                </button>
            </div>
        )}
    else {
        return (
            <div>
                <Popup trigger={(
                <button className="btn btn-outline-danger" onClick={handleLike}>
                    <FontAwesomeIcon icon={faHeart} /> 
                    {liked ? "" : " Save for later"}
                    </button>
                    )} position="right center">
                    {/* {"You need to be logged in to make an account"} */}
                <div>You must be logged in to create a wishlist.</div>
            </Popup>
        </div>
        )}
    
}

export default LikeButton