import React, { useEffect, useState } from 'react'
import CustomerListItem from '../components/CustomerListItem'

export default function CustomerListPage() {
    const [customerList, setCustomerList]=useState([])

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
            List Page
            {customerList.map(item=>{
                return(<CustomerListItem key={item.id} customerData={item}/>)
            })}
            

            
        </div>
    )
}
