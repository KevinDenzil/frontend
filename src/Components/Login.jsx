import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [regno, setRegno] = useState("")
    const [password, setPassword] = useState("")
    const [loginstatus, setLoginstatus] = useState("Logged Out")
    
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post("https://kevins-login-app-a00ce4e3a9f1.herokuapp.com/check", {regno, password})
        .then(res => {
            if(res.data.message) {

                alert(res.data.message);

            } else {
                setLoginstatus("Logged In")
                console.log("Logged in")
                navigate('/dash')
            }
        }).catch(err => console.log(err));
    }

    return(
        <>
        <br /><br />
        <form onSubmit={handleSubmit}>
            <h2>User Login</h2>
            <div>
                <label>Regno : </label>
                <input type = 'text' placeholder = "Enter Regno" onChange={e => setRegno(e.target.value)} />
            </div>
            <div>
                <label>Password : </label>
                <input type = 'password' placeholder = "Enter Password" onChange={e => setPassword(e.target.value)} />
            </div>
            <center>
                <br />
                <input type = 'submit' />
                <br />
            </center>
        </form>
    </>
    )

}

export default Login;