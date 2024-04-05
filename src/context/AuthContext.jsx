import {createContext, useState} from "react";


export const AuthContext = createContext({})

function AuthContextProvider({children}) {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null
    })

    function login() {
        setAuth({
            ...auth,
            isAuth: true,
            user: {
                username: "",
                password: "",
                email: "",
            }
        })
        console.log("login log", auth.user.email)
        console.log("gebruiker is ingelogd")
    }

    function logout() {
        setAuth({
            ...auth,
            isAuth: false,
            user: null
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