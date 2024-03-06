import { SignIn } from "@clerk/clerk-react";
import { useState } from 'react'
import '../Authentication/Modal.css'
import { useLocation } from "react-router-dom";

function SignInComponent () {

    const [modal, setModal] = useState(false);
    let location = useLocation()

    const toggleModal = () => {
        setModal(!modal)
        console.log(modal)
    }

    return (
        <div> 
            <div onClick={toggleModal} className="button-modal"> 
            Account
            </div>
                {modal && (
                    <div className ="modal">
                        <div className="overlay">
                            <div className="modal-content">
                                <SignIn 
                                afterSignInUrl={location.pathname}
                                />
                                <p className="close-modal" onClick={toggleModal}>
                                X
                                </p>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}


export default SignInComponent

{/* <SignOutButton signOutCallback={() => redirect('/')} /> */}
