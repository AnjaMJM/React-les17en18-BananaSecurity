import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import {checkTokenValidity} from "../helpers/checkTokenValidity";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext(null)


function AuthContextProvider({children}) {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending"
    });

    const navigate = useNavigate();

    //Checkt of er nog een geldige token in de localStorage zit en logt dan automatisch in
    useEffect(() => {
        const storedToken = localStorage.getItem("jwtToken");
        if (storedToken && checkTokenValidity(storedToken)) {
            void login(storedToken);
        } else {
            void logout()
        }
    }, []);


    async function login(jwtToken) {
        // Als login goed gaat, wordt er een token aangemaakt en met onderstaande code opgeslagen in de localStorage
        const decodedToken = jwtDecode(jwtToken)
        localStorage.setItem("jwtToken", jwtToken);

        try {
            const response = await axios.get(`http://localhost:3000/600/users/${decodedToken.sub}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            });
            setAuth({
                ...auth,
                isAuth: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id,
                },
                status: "done"
            });
            console.log("De gebruiker is ingelogd 🔓");
            navigate("/profile")
        } catch (err) {
            console.error(err)
        }
    }

    function logout() {
        setAuth({
            ...auth,
            isAuth: false,
            user: null,
            status: "done"
        })
        localStorage.removeItem("jwtToken");
        navigate("/signin")
        console.log("gebruiker is uitgelogd")
    }

    const data = {
        auth,
        login,
        logout
    }
    console.log("context log", auth)
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider