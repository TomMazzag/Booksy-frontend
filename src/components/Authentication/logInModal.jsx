import { useState, redirect } from 'react'
import { SignOutButton, SignIn, SignedIn, SignedOut } from "@clerk/clerk-react"
import './../../../src/App.css'
import './../Authentication/modal.css'

function App() {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
      setModal(!modal)
    }
  return (
    <>
      <div>
      <SignedOut>
        <button
        onClick={toggleModal}
        className="button-modal"> 
        </button>
        <div className ="modal">
          <div className="overlay">
            <div className="modal-content">
              <p>
                <h2> Some text</h2>
              </p>
              <button
                className="close-modal"
                onClick={toggleModal}>
              </button>
            </div>
          </div>
        </div>
        <p>This content is public. Only signed out users can see the SignInButton above this text.</p>
      </SignedOut>
      <SignedIn>
        <SignOutButton signOutCallback={() => redirect('/')} />
        <p>This content is private. Only signed in users can see the SignOutButton above this text.</p>
      </SignedIn>
      </div>
    </>
  )
}