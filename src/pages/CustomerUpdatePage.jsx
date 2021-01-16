import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import {Buttons} from '../components/Buttons'

export default function CustomerUpdatePage(props) {
    const customerId=props.match.params.id
    const [formData, setFormData]=useState({})
    const history=useHistory()

    // * get customers details 
    function getCustomerDetails() {
        const url=`https://frebi.willandskill.eu/api/v1/customers/${customerId}/`
        const token=localStorage.getItem("TOKEN")
        fetch(url,{
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then(data=>setFormData(data))
        }

    useEffect(()=>{
        getCustomerDetails()
    },[])

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
                    value={formData[name] || ""}
                    onChange={handleOnChange}
                />
            </div>
        )
    }

    // * update customer details 
    function handleOnSubmit(e) {
        e.preventDefault()
        const url=`https://frebi.willandskill.eu/api/v1/customers/${customerId}/`
        const token=localStorage.getItem("TOKEN")
        fetch(url, {
            method:"PUT",
            body:JSON.stringify(formData),
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then(()=>history.push(`/customers/${customerId}`))
    }

    return (
        <div>
            <h1>update customer</h1>
            <form onSubmit={handleOnSubmit}  >
                {renderInput("name", "Customer Name","Name")}
                {renderInput("organisationNr", "Organisation Number")}
                {renderInput("vatNr", "Vat Namber ")}
                {renderInput("reference", "Reference ")}
                {renderInput("paymentTerm", "Payment Term", "number")}
                {renderInput("website", "Website " , "url")}
                {renderInput("email", "Customer Email","email")}
                {renderInput("phoneNumber", "Phone Number", "tel")}

                <Buttons type="submit">Update Customer</Buttons>
                
            </form>

        </div>
    )
}
