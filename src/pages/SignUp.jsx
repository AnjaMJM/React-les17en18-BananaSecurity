import {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from "../components/form/Form";

import axios from "axios";


function SignUp() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })

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
                formData
            });
            if (response.status === 200) {
                console.log("gebruiker is geregistreerd")
            }
        } catch(err) {
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
                buttonName="Registreren"/>

            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;