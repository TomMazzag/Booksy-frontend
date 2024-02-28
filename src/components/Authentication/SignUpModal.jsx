import { SignUp } from "@clerk/clerk-react";
import '../Authentication/Modal.css'

function SignUpComponent () {

    return (
        <div>
          <div className ="modal">
            <div className="overlay">
              <div className="modal-content">
                <p>
                  <SignUp />
                </p>
              </div>
            </div>
          </div>
      </div>
)}


export default SignUpComponent;
