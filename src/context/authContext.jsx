import {createContext, useState} from "react";


export const AuthContext = createContext({})

function AuthContextProvider({children}) {
const [isAuthorized, setIsAuthorized] = useState(false)

    function login(){
    setIsAuthorized(true)
    }

    function logout(){
    setIsAuthorized(false)
    }

    const data = {
        isAuthorized,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider