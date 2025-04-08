import { useLocation, useNavigate } from "react-router-dom";
import SignInModal from "./Signin";

export const SignInModalWrapper = () => {
    const navigate = useNavigate();

    return (
        <>

            {/* Render the modal */}
            <SignInModal onClose={() => navigate(-1)} />
        </>
    );
};
