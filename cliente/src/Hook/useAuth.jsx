import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth