import React from "react";

const SignInModal = ({ closeModal }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Sign In</h2>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};

export default SignInModal;
