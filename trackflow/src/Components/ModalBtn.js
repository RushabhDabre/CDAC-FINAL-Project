import React from 'react'
import { useState } from 'react';
import ModalHome from './ModalHome';

export default function ModalBtn() {
    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    // Function to handle opening the modal
    const handleOpenModal = () => {
        setShowModal(true);
    };

    // Function to handle closing the modal
    const handleCloseModal = () => {
        setShowModal(false);
    };
        
    return (
        <div>
            <h1>Parent Component</h1>
            <button type="button" className="btn btn-primary" onClick={handleOpenModal}>Open Modal</button>

            {/* Modal */}
            {showModal &&
                <div className="modal-backdrop fade show" style={{ zIndex: '1040', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <ModalHome handleClose={handleCloseModal} />
                </div>
            }
        </div>
    );

}
