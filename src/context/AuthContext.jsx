import {createContext, useState} from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";


export const AuthContext = createContext({})

function AuthContextProvider({children}) {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending"
    })

    async function login(jwtToken) {
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