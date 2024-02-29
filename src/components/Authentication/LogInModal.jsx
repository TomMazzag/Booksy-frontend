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
            <div onClick={toggleModal} className="button-modal"> 
            Account
            </div>
                {modal && (
                    <div className ="modal">
                        <div className="overlay">
                            <div className="modal-content">
                            <p>
                                <SignIn />
                            </p>
                        <p className="close-modal" onClick={toggleModal}>
                        Back
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
