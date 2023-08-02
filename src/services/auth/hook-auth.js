import { useContext } from "react";
import { AuthContext } from "./context-auth";
import { signInGoogle } from "../../api/auth-google";
import { storeToken } from "../../api/storage";

export const useAuth = () => {
    const { user, setUser } = useContext(AuthContext)

    const loginWithGoogle = async () => {
        const userInfo = await signInGoogle()
        setUser(userInfo)
        await storeToken(userInfo.idToken)
    };

    return { user, loginWithGoogle }
}