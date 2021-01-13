import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../Contexts/UserContext';

export default function LoginPage() {
    // webb19@willandskill.se
    // Abdullahi.Aden@yh.nackademin.se
    const [formData, setFormData]=useState({
        email:"Abdullahi.Aden@yh.nackademin.se",
        password:"javascriptoramverk"
    })

    const history=useHistory()

    function handleOnChange(e){
        console.log(e.target.name, e.target.value);
        const inputName=e.target.name
        const inputValue=e.target.value
        const newObj={...formData,[inputName]:inputValue}
        setFormData(newObj)
    }
    function handleOnSubmit(e){
        e.preventDefault()
        const url="https://frebi.willandskill.eu/api-token-auth/"

        // data we send to the api
        const payLoad={
            email:formData.email,
            password:formData.password
        }
        // fetch here with post to login 
        fetch(url, {
            method:"POST",
            body:JSON.stringify(payLoad),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            localStorage.setItem("TOKEN", data.token )
            // console.log(data.token)
            history.push("/home")
        })
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label>Email</label>
                <input name="email" value={formData.email} onChange={handleOnChange}></input>
                <label>Password</label>
                <input name="password" value={formData.password} onChange={handleOnChange}></input>

                <button  type="submit">Login</button>
            </form>
            {/* <button>Get user info</button>
            <button>Get customers list</button> */}
        </div>
    )
}
