import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import {AuthContext} from "../context/AuthContext";

function Profile() {
const [data, setData] = useState({})

    const {auth} = useContext(AuthContext);

    async function secretData() {
        const storedToken = localStorage.getItem("jwtToken");
        console.log(storedToken);
        try {
            const response = await axios.get("http://localhost:3000/660/private-content",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${storedToken}`
                    }
                }
        )
            console.log(response.data)
            setData(response.data)
        } catch (err) {
            console.error("geheimen niet kunnen vinden", err)
        }
    }

    useEffect(() => {
        secretData()
    }, [])

    return (<>
            <h1>Profielpagina</h1>
            <section>
                <h2>Gegevens</h2>
                <p><strong>Gebruikersnaam:</strong> {auth.user.username} </p>
                <p><strong>Email:</strong> {auth.user.email}</p>
            </section>
            <section>
                <h2>Strikt geheime profiel-content</h2>
                {data &&
                    <>
                        <h3>{data.title}</h3>
                        <p>{data.content}</p>
                    </>
                }

            </section>
            <p>Terug naar de <Link to="/">Homepagina</Link></p>
        </>);
}

export default Profile;