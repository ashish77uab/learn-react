import React from "react";

const RegisterModal = ({ closeModal }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Register</h2>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};

export default RegisterModal;
