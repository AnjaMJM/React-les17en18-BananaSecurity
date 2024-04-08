import {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext.jsx";
import Form from "../components/form/Form";
import axios from "axios";

function SignIn() {
    const {login} = useContext(AuthContext)
    const {loginData, setLoginData} = useState({
        email: "",
        password: ""
    })

    const { email, password } = loginData


    async function handleLogin() {
        try {
            const response = await axios.post
            ("http://localhost:3000/login", {
                email,
                password,
            });
            if (response.status === 200) {
                login(response.data.accessToken)
                console.log(response)
            }
        } catch (err) {
            console.error(err)
        }
    }

    function handleSignInChange(e) {
        const changedFieldName = e.target.name;
        setLoginData({
            ...loginData,
            [changedFieldName]: e.target.value,
        })
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <Form
                buttonName="inloggen"
                handleSubmit={handleLogin}
                handleChange={handleSignInChange}
                emailValue={email}
                passwordValue={password}
                signUp={false}
            />

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;