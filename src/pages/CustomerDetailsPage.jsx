import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import styled from 'styled-components';
import {Buttons} from "../components/Buttons"


// inherit styles of Button , only change bg
const ButtonSecondary =styled (Buttons)`
background:red;
margin-left:0;

`

export default function CustomerDetailsPage(props) {
    const customerId = props.match.params.id
    // console.log(customerId);

    const [customerItem, setCustomerItem]=useState(null)
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
    .then(data=>setCustomerItem(data))
    }

    useEffect(()=>{
        getCustomerDetails()
    },[])

    // *delete customer
    function deleteCustomer() {
        const url=`https://frebi.willandskill.eu/api/v1/customers/${customerId}/`
        const token=localStorage.getItem("TOKEN")
        fetch(url,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        })
        .then(()=>history.push("/home"))
        
    }


    return (
        <div>
             {console.log(customerItem)}
            {/* if its loaded */}
            {customerItem
            ? (
                <div>
                    <h1>{customerItem.name}</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td>organisation Number</td>
                                <td>{customerItem.organisationNr}</td>
                                {/* <td>{customerItem.organisationNr}</td> */}
                            </tr>
                            <tr>
                                <td>VAT Number</td>
                                <td>{customerItem.vatNr}</td>
                            </tr>
                            <tr>
                                <td>Reference</td>
                                <td>{customerItem.reference}</td>
                            </tr>
                            <tr>
                                <td>Payment Term</td>
                                <td>{customerItem.paymentTerm}</td>
                            </tr>
                            <tr>
                                <td>Website</td>
                                <td> {customerItem.website}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td> <a href={`mailto:${customerItem.email}`}> {customerItem.email}</a> </td>
                            </tr>
                            <tr>
                                <td>Phone Number</td>
                                <td>{customerItem.phoneNumber}</td>
                            </tr>
                        </tbody>  
                    </table>
                    
                </div>
            )
            : ( <span>loading...</span> )}
            
            <ButtonSecondary onClick={deleteCustomer}>Delete</ButtonSecondary>
            <Link to ={`/customers/${customerId}/edit`}>Edit Customer</Link>
        </div>
    )
}
