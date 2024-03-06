import { SignUp } from "@clerk/clerk-react";
import './Modal.css'
import { useState } from 'react'
import { useLocation } from "react-router-dom";

function SignUpComponent () {

    const [modal, setModal] = useState(false);
    let location = useLocation()

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div> 
            <div onClick={toggleModal} className="button-modal"> 
                Sign up
        </div>
            {modal && (
                <div className ="modal">
                    <div className="overlay">
                        <div className="modal-content">
                            <SignUp
                            afterSignUpUrl={location.pathname}
                            />
                            <p className="close-modal" onClick={toggleModal}>
                            X
                            </p>
                        </div>
                    </div>
                </div>
            )}
    </div>

)}


export default SignUpComponent;