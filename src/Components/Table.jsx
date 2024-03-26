import React, { useState, useEffect } from "react";
import axios from 'axios';

const Table = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchAllData = async ()=>{
            try{
                const res = await axios.get("https://kevins-login-app-a00ce4e3a9f1.herokuapp.com/api");
                setData(res.data)
                if(res.data){
                    console.log(res.data);
                }else{
                    console.log("Nothing");
                }
            }catch(err){
                console.log(err);
            }
        }
        fetchAllData();
    }, [data]);
    const DisplayData = data?.map(
        (info)=> {
            return(
                <tr>
                    <td>{info.name}</td>
                    <td>{info.regno}</td>
                    <td>{info.email}</td>
                </tr>
            )
        }
    )
    return (
        <div>
            <table align='center'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Regno</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
}

export default Table;