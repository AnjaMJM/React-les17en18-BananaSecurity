import {createContext, useState} from "react";


export const FormContext = createContext({})

function FormContextProvider({children}) {
    const [formData, setFormData] = useState({
        Name: "Name",
        Email: "Email",
        Password: "Password"
    })

    function login(){
        setFormData(true)
        console.log("gebruiker is ingelogd")
    }

    function logout(){
        setIsAuthorized(false)
        console.log("gebruiker is uitgelogd")
    }

    const data = {
        isAuthorized,
        login,
        logout
    }
    console.log(formData)
    return (
        <FormContext.Provider value={data}>
            {children}
        </FormContext.Provider>
    )
}

export default AuthContextProvider