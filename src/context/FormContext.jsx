import {createContext, useState} from "react";

export const FormContext = createContext({})

function FormContextProvider({children}) {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const data = {
        formData,
        setFormData,
        username: formData.name,
        email: formData.email,
        password: formData.password,
    }
    console.log("form context", formData)
    return (
        <FormContext.Provider value={data}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContextProvider