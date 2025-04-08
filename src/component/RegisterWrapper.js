import { useLocation, useNavigate } from "react-router-dom";
import RegisterModal from "./Register";

export const RegisterModalWrapper = () => {
    const navigate = useNavigate();

    return (
        <>
            <RegisterModal onClose={() => navigate(-1)} />
        </>
    );
};
