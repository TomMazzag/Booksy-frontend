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
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            if (isSignedIn) {
                try {
                    const result = await checkLikedBook(user.id, bookId);
                    setLiked(result.liked);
                } catch (error) {
                    console.error('Error fetching liked status:', error);
                }
            }
        };

        fetchData();
    }, [isSignedIn, user.id, bookId]);

    useEffect(() => {
        const handleLike = async () => {
            console.log(`Like when clicked: ${liked}`);

            if (isSignedIn) {
                if (liked) {
                    updateUserLikedList(user.id, bookId, "unlike");
                    console.log("Sent unlike to DB");
                } else {
                    updateUserLikedList(user.id, bookId, "like");
                    console.log("Sent like to DB");
                }
            }
        };

        handleLike(); // Call handleLike when liked state changes
    }, [liked, isSignedIn, user.id, bookId]);

    const handleButtonClick = () => {
        setLiked(!liked); // Toggle liked state
    };

    
        if (isSignedIn) {
            return (
                <div>
                    <button className="btn btn-outline-danger" onClick={handleButtonClick}>
                        <FontAwesomeIcon icon={faHeart} /> 
                        {liked?"":" Save for later"}
                    </button>
                </div>
            )}
        else {
            return (
                <div>
                    <Popup trigger={(
                    <button className="btn btn-outline-danger" onClick={handleButtonClick}>
                        <FontAwesomeIcon icon={faHeart} /> 
                        {liked ? "" : " Save for later"}
                        </button>
                        )} position="right center">
                        {/* {"You need to be logged in to make an account"} */}
                    <div>You must be logged in to save books</div>
                </Popup>
            </div>
            )}
    
    };

export default LikeButton;