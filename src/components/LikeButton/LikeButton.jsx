import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './../Home/BookCard.css';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { useUser} from "@clerk/clerk-react";
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
    }, []);

    const handleLike = async () => {
        setLiked(!liked);
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
    
    useEffect(() => {
        handleLike(); 
    }, []);
    

    const handleButtonClick = () => {
        setLiked(!liked); 
    };

    
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
                    <button className="btn btn-outline-danger" onClick={handleButtonClick}>
                        <FontAwesomeIcon icon={faHeart} /> 
                        {liked ? " Save for later" : ""}
                        </button>
                        )} position="right center">
                        {/* {"You need to be logged in to make an account"} */}
                    <div>Please log in to save books!</div>
                </Popup>
            </div>
            )}
    
    };

export default LikeButton;