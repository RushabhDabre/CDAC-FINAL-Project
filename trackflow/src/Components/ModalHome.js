import React from 'react'

export default function ModalHome({openModal}) {
    
    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={openModal} >
                Open Modal
            </button>
        </div>
    );
    
}
