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
    const [liked, setLiked] = useState(false);
    // const [refreshKey, setRefreshKey] = useState(0);

    const handleButtonClick = () => {
        setLiked(!liked); 
    };

    const fetchData = async () => {
        if (user && liked !== undefined) { 
            try {
                const result = await checkLikedBook(user.id, bookId);
                // // console.log("I am the result:", result)
                setLiked(result);
            } catch (error) {
                console.error('Error fetching liked status:', error);
            }
        }
    }

    useEffect(() => { 
        fetchData();
    }, [user]);

    const handleLike = async () => {
        setLiked(!liked);
        // console.log(`Like when clicked: ${liked}`);
        if (user && liked !== undefined) {
            if (liked) {
                await updateUserLikedList(user.id, bookId, "unlike");
                // console.log("Sent unlike to DB");
            } else {
                await updateUserLikedList(user.id, bookId, "like");
                // console.log("Sent like to DB");
            }
        }
    };
    
        if (isSignedIn) {
            return (
                <div>
                    <button className="btn btn-outline-danger" onClick={handleLike}>
                        <FontAwesomeIcon icon={faHeart} /> 
                        {liked ? "": "Add to Favourites"}
                    </button>
                </div>
            )}
        else {
            return (
                <div>
                    <Popup trigger={(
                    <button className="btn btn-outline-danger" onClick={handleButtonClick}>
                        <FontAwesomeIcon icon={faHeart} /> 
                        {liked ? "" : "Add to Favourites"}
                        </button>
                        )} position="right center">
                        {/* {"You need to be logged in to make an account"} */}
                    <div>Please log in to save books!</div>
                </Popup>
            </div>
            )}
    
    };

export default LikeButton;