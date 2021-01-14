import React, { useContext, useEffect, useState } from 'react'
import CustomerListItem from '../components/CustomerListItem'
import { CustomersListContext } from '../Contexts/CustomersListContext'

import styled from "styled-components"

const Heading =styled.h1`
font-size:2rem;
color:black;
`

export default function CustomerListPage() {
    const {customerList,setCustomerList}=useContext(CustomersListContext)

    function getCustomerList() {
        const url="https://frebi.willandskill.eu/api/v1/customers/"
        const token=localStorage.getItem("TOKEN")

        fetch(url,{
            headers:{
                "Content-Type":"application.json",
                "Authorization":`Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then(data=>setCustomerList(data.results))
        
    }

useEffect(()=>{
        getCustomerList()
    },[])
        

    return (
        <div>
            <Heading>Customers</Heading>
            {customerList.map(item=>{
                return(<CustomerListItem key={item.id} customerData={item}/>)
            })}
            

            
        </div>
    )
}
