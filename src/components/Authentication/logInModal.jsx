import { SignIn } from "@clerk/clerk-react";
import { useState} from 'react'
import '../Authentication/modal.css'


function SignInComponent () {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div> 
            <button onClick={toggleModal} className="button-modal"> 
            Placeholder button
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