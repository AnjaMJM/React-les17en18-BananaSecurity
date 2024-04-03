import {useContext, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";


function Form({buttonName}) {
    const {login} = useContext(AuthContext)

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const {username, email, password} = formData

    function onSubmit(e) {
        e.preventDefault()
        console.log("Naam:", username, "Email:", email, "Wachtwoord:", password)
        login()
    }

    function handleChange(e) {
        const changedFieldName = e.target.name;
        setFormData({
            ...formData,
            [changedFieldName]: e.target.value,
        })
    }

    console.log("from log", formData)

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Gebruikersnaam"/>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="e-mailadres"/>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="wachtwoord"/>
            <button type="onsubmit">{buttonName} </button>
        </form>
    );
}


export default Form;