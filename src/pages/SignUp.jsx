import {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from "../components/form/Form";

import axios from "axios";


function SignUp() {
    //deze useState nooit meegeven met context, i.v.m password
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })
    // destructuren van formData om de key's direct aan te kunnen spreken.
    const {username, email, password} = formData;

    function handleSignUpChange(e) {
        const changedFieldName = e.target.name;
        setFormData({
            ...formData,
            [changedFieldName]: e.target.value,
        })
    }

    async function handleSignUp() {
        try {
            const response = await axios.post("http://localhost:3000/register", {
                email,
                username,
                password
            });console.log("gebruiker is geregistreerd", response)
        } catch (err) {
            console.error(err)
        }

    }

    return (
        <>
            <h1>Registreren</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque
                eligendi
                harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur
                deserunt
                doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>

            <Form
                handleChange={handleSignUpChange}
                handleSubmit={handleSignUp}
                usernameValue={username}
                emailValue={email}
                passwordValue={password}
                buttonName="Registreren"
                signUp={true}/>

            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;