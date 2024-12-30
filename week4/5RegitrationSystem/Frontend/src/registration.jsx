import React from "react";
import { useState } from "react";
import axios from 'axios';
import './registration.css'


const RegistrationPage = () => {
const [userData, setUserData] = useState({name:'', email:'', password:''});
// const navigate = useNavigate()

const handleChange = (e) => {
    const {name , value} = e.target
    setUserData({...userData, [name]:value})
}

const resetForm = () =>{
    setUserData({name:'', email:'', password:''})
}

const handleSubmit = async (e) => {
    e.preventDefault()

    try{
        const response = await axios.post('http://localhost:8080/api/user', userData)

        if(response.status === 201){

            console.log('Registartion successful', userData);
            alert('user registerd successfully')
            resetForm();


        }
    }
    catch(err){
        console.error("Registration failed")
    }
}

    return(
       <div className="container">
        <div className="content">
            <form action="" onSubmit={handleSubmit}>

                <div className="input-group">
                    <label htmlFor="name">Name</label><br />
                    <input type="text" id="name" name="name" value={userData.name} onChange={handleChange} required />
                </div>

                <div className="input-group">
                    <label htmlFor="email">Email</label><br />

                    <input type="email" name="email" id="email" value={userData.email} onChange={handleChange} required/>
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" id="password" value={userData.password}  required onChange={handleChange} resource=""/>
                </div>

                <button className="submitBtn" type="submit">Submit</button>
            </form>

        </div>
       </div>
    )

}

export default RegistrationPage
