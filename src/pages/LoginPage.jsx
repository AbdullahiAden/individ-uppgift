import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../Contexts/UserContext';

import styled from "styled-components";
import {Buttons} from "../components/Buttons";

export default function LoginPage() {
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
            <form onSubmit={handleOnSubmit} className="form-group">
                <label>Email:</label>
                <input className="form-control form-control-lg" name="email" value={formData.email} onChange={handleOnChange}></input>
                <label>Password:</label>
                <input className="form-control form-control-lg " name="password" value={formData.password} onChange={handleOnChange}></input>

                <Buttons primary type="submit">Login</Buttons>
            </form>
        </div>
    )
}
