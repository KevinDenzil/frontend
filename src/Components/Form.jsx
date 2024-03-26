import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import emailjs from '@emailjs/browser'

const Form = () => {

    const [name, setName] = useState("")
    const [regno, setRegno] = useState()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const serviceId = 'service_u641p8n';
    const templateId = 'template_xax72gj';
    const publicKey = 'c_sUmKTkfnV6suX_P';

    const templateParams = {
        from_name: "Kevin",
        to_name : name,
        message : "Wassup CSE-B!!!",
        to_email : email
    }

    

    const navigate = useNavigate();

    function handleSubmit(event) {
        const hash = bcrypt.hashSync(password, 10);
        event.preventDefault();
        axios.post("https://kevins-login-app-a00ce4e3a9f1.herokuapp.com/create", {name, regno, email, hash})
        .then(res => {
            emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent!");
                console.log(response)
            })
            .catch((error)=> {
                console.log(error)
            })
            console.log(res);
            navigate("/dash");
        }).catch(err => console.log(err));
    }


    return(
        <>  
            <br /><br /><br /><br />
            <form onSubmit={handleSubmit}>
                <h2>Enter Details</h2>
                <div>
                    <label>Name : </label>
                    <input type = 'text' placeholder = "Enter Name" onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label>Regno : </label>
                    <input type = 'text' placeholder = "Enter Regno" onChange={e => setRegno(e.target.value)} />
                </div>
                <div>
                    <label>Email : </label>
                    <input type = 'email' placeholder = "Enter Email" onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password : </label>
                    <input type = 'password' placeholder = "Enter Password" onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <br />
                <center>
                <input type = 'submit' />
                </center>
                <br />
                </div>
            </form>
            <h2>Already have an account?</h2>
            <center>
            <button class = 'loginbtn' onClick={() => {navigate('/login')}}>Log In</button>
            </center>
        </>
    )

}

export default Form;