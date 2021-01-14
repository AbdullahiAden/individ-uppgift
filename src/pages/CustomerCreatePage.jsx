import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import {Buttons} from '../components/Buttons'

export default function CustomerCreatePage() {

    const [formData, setFormData]=useState({})
    const history=useHistory()

    function handleOnChange(e) {
        const name=e.target.name
        const value=e.target.value
        const newObj={...formData,[name]:value}
        setFormData(newObj)
    }

    function renderInput(name, label,type) {
        return(
            <div className="form-group">
                <label >{label}</label>
                <input className="form-control"
                    type={type || "text"}
                    name={name}
                    onChange={handleOnChange}
                />
            </div>
        )
    }
    function handleOnSubmit(e) {
        e.preventDefault()
        const url="https://frebi.willandskill.eu/api/v1/customers/"
        const token=localStorage.getItem("TOKEN")
        fetch(url,{
            method:"POST",
            body:JSON.stringify(formData),
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            history.push("/home")
        }) 
        
    }

    return (
        <div>
            <h1>Create customer</h1>
            <form onSubmit={handleOnSubmit}  >
                {renderInput("name", "Customer Name","Name")}
                {renderInput("organisationNr", "Organisation Number")}
                {renderInput("vatNr", "Vat Namber ")}
                {renderInput("reference", "Reference ")}
                {renderInput("paymentTerm", "Payment Term", "number")}
                {renderInput("website", "Website " , "url")}
                {renderInput("email", "Customer Email","email")}
                {renderInput("phoneNumber", "Phone Number", "tel")}

                <Buttons type="submit">Create Customer</Buttons>
                
                {/* <button  className=""></button> */}
            </form>
            <code>{JSON.stringify(formData)}</code>
            
        </div>
    )
}
