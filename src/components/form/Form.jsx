import {useContext} from 'react';
import {FormContext} from "../../context/FormContext";


function Form({buttonName, handleSubmit, handleChange}) {

    const {formData, setFormData, username, email, password} = useContext(FormContext)




    console.log("form log", formData)

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={username} onChange={handleChange} placeholder="Gebruikersnaam"/>
            <input type="email" name="email" value={email} onChange={handleChange} placeholder="e-mailadres"/>
            <input type="password" name="password" value={password} onChange={handleChange} placeholder="wachtwoord"/>
            <button type="onsubmit">{buttonName} </button>
        </form>
    );
}


export default Form;