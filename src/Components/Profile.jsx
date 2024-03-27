import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import emailjs from '@emailjs/browser'
import IconButton from "@material-ui/core/IconButton";


const Profile = () => {

    const {id} = useParams();

    const [showpass, setShowpass] = useState(false)
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState({});

    const serviceId = 'service_u641p8n';
    const templateId = 'template_xax72gj';
    const publicKey = 'c_sUmKTkfnV6suX_P';

    const templateParams = {
        from_name: "Kevin",
        to_name : userdata.name,
        message : "Your account has been updated!",
        to_email : userdata.email
    }

    // useEffect(() => {
    //     axios.get('https://localhost:3000/dash'+regno)
    //     .then(res => {
    //         console.log(res)
    //         setValues({...values, name : res.data.name, email : res.data.email, regno : res.data.regno, password : res.data.email})
    //     })
    //     .catch(err => console.log(err))
    // })
    const fetchAllData = async ()=>{
        try{
            // const res = await axios.get("http://localhost:3001/api/"+id);
            const res = await axios.get("https://kevins-login-app-a00ce4e3a9f1.herokuapp.com/api/"+id);
            setUserdata(res.data)
            if(res.data){
                console.log(res.data);
            }else{
                console.log("Nothing");
            }
        }catch(err){
            console.log(err);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        // axios.post("http://localhost:3001/update", {name : userdata.name, regno : userdata.regno , email : userdata.email})
        axios.post("https://kevins-login-app-a00ce4e3a9f1.herokuapp.com/update", {name : userdata.name, regno : userdata.regno , email : userdata.email})
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
            navigate("/dash/"+id);
        }).catch(err => console.log(err));
    }

    function handleDelete(event) {
        
        event.preventDefault();
        // axios.get("http://localhost:3001/delete/"+id)
        axios.get("https://kevins-login-app-a00ce4e3a9f1.herokuapp.com/delete/"+id)
        .then(res => {
            console.log(res)
            navigate("/")
        })
        .catch(err => console.log(err));
    }

    useEffect( () => {
        fetchAllData();
    },[])
        
    return(
        <>
            <form onSubmit={handleSubmit}>
                <h1>User Profile</h1>
                <div>
                    <label>Name : </label>
                    <input type = 'text' value = {userdata.name} onChange={e => setUserdata({...userdata,name : e.target.value})}/>
                </div>
                <div>
                    <label>Email : </label>
                    <input type = 'email' value = {userdata.email} onChange={e => setUserdata({...userdata,email : e.target.value})} />
                </div>
                {/* <div>
                    <label>Password : </label>
                    <input type = {showpass ? 'text' : 'password'} value = {values.password} onChange={e => setValues({...values,password : e.target.value})} />
                    <IconButton onClick={ setShowpass( showpass ? false : true)}>{showpass ? (<Visibility />) : (<VisibilityOff />)}</IconButton>
                </div> */}
                <div>
                    <br />
                    <input type='submit' />
                    <input type='button' className = "delbtn" value='Delete' onClick = {handleDelete} />
                </div>
            </form>
        </>
    )
}

export default Profile;