import { SignUp } from "@clerk/clerk-react";
import { useState, useEffect} from 'react'
import '../Authentication/modal.css'
import { useLocation, useHistory } from 'react-dom'

const ModalComponent = () => {
  const location = useLocation();
  const history = useHistory();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check if the URL contains a query parameter indicating the modal is open
    const params = new URLSearchParams(location.search);
    const modalParam = params.get('modal');

    if (modalParam === 'opened') {
      setIsModalOpen(true);
    }
  }, [location.search]);

  const openModal = () => {
    // Update the URL with the query parameter indicating the modal is open
    history.push({ search: '?modal=opened' });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Remove the query parameter from the URL
    history.push({ search: '' });
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Modal Content Goes Here</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalComponent;










// function SignUpComponent () {

//     const [modal, setModal] = useState(false)

//     const toggleModal = () => {
//         setModal(!modal)
//     }

//     return (
//         <div> 
//             <button
//             onClick={toggleModal}
//             className="button-modal"> 
//             </button>
//                 <div className ="modal">
//                     <div className="overlay">
//                         <div className="modal-content">
//                             <p>
//                                 <h2> Some text</h2>
//                             </p>
//                 <button
//                     className="close-modal"
//                     onClick={toggleModal}>
//                 </button>
//                 </div>
//             </div>
//             </div>
//     </div>
//     )
// }


// export default SignUpComponent