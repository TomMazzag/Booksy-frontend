import { SignUp } from "@clerk/clerk-react";
import './Modal.css'

function SignUpComponent () {

    return (
        <div>
          <div className ="modal">
            <div className="overlay">
              <div className="modal-content">
                <div>
                  <SignUp />
                </div>
              </div>
            </div>
          </div>
      </div>
)}


export default SignUpComponent;