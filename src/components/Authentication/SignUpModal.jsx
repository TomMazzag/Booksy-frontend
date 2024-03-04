import { SignUp } from "@clerk/clerk-react";
import '../Authentication/Modal.css'
import { useState} from 'react'

function SignUpComponent () {

    const [modal, setModal] = useState(false);
    // const [modalSignUp, setModalSignUp] = useState(false);

    
    const toggleModal = () => {
        setModal(!modal)
        console.log(modal)
    }

    return (
        <div> 
            <div onClick={toggleModal} className="button-modal"> 
            Sign up!
            </div>
                {modal && (
                    <div className ="modal">
                        <div className="overlay">
                            <div className="modal-content">
                                <SignUp />
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

export default SignUpComponent;
