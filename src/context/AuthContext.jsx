import {createContext, useState} from "react";


export const AuthContext = createContext({})

function AuthContextProvider({children}) {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: "",
        email: ""
    })

    function login() {
        setAuth({
            ...auth,
            isAuth: true,
            email: "" //Hier kwam het object 'email' vandaan
        })
        console.log("login log", auth.email)
        console.log("gebruiker is ingelogd")
    }

    function logout() {
        setAuth({
            ...auth,
            isAuth: false
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