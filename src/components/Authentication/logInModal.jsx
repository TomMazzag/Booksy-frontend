import { SignIn } from "@clerk/clerk-react";
import { useState} from 'react'
import '../Authentication/Modal.css'

function SignInComponent () {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div> 
            <button onClick={toggleModal} className="button-modal"> 
            Log in 
            </button>
                {modal && (
                    <div className ="modal">
                        <div className="overlay">
                            <div className="modal-content">
                            <p>
                                <SignIn />
                            </p>
                        <button className="close-modal" onClick={toggleModal}>
                        Close
                        </button>
                        </div>
                    </div>
                </div>
                )}
    </div>
    )
}


export default SignInComponent

{/* <SignOutButton signOutCallback={() => redirect('/')} /> */}