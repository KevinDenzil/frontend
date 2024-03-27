import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Table from './Table'

const Dashboard = () => {
    
    const {id} = useParams();
    const navigate = useNavigate();

    const handleProfile = () => {
        navigate("/profile/"+id)
    }

    const handleLogout = () => {
        navigate("/")
    }

    return(
        <>  
            <input type = "button" className = "logoutbtn" onClick = {handleLogout} value="Logout" /><input type="button" className = "profbtn" onClick = {handleProfile} value="Your Profile" />
            <Table />
        </>
    )
}
export default Dashboard;