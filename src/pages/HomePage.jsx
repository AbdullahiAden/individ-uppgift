import React, {useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import CustomerListItem from '../components/CustomerListItem'
import UserInfo from '../components/UserInfo'
import { UserContext } from '../Contexts/UserContext'

export default function HomePage() {
    const {userInfo, setUserInfo}=useContext(UserContext)

    const [customerList, setCustomerList]=useState([])

    // const [formData, setFormData]=useState({})

    const history=useHistory()

   // *create customers ..........

    // function handleOnChange(e) {
    //     const name=e.target.name
    //     const value=e.target.value
    //     const NewObj={...formData,[name]:value}
    //     setFormData(NewObj)
    // }

    // function handleOnSubmit (e) {
    //     e.preventDefault()
    //     const url="https://frebi.willandskill.eu/api/v1/customers/"
    //     const token=localStorage.getItem("TOKEN")
    //     fetch(url,{
    //         method:"POST",
    //         body:JSON.stringify(formData),
    //         headers:{
    //             "Content-Type":"application/json",
    //             "Authorization": `Bearer ${token}`
    //         }
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         {console.log(data)}
    //         history.push("/home")
    //     }) 
    //     // 
    // }

    // function renderInput(name, label,type) {
    //     return(
    //         <div>
    //             <label >{label}</label>
    //             <input 
    //                 type={type || "text"}
    //                 name={name}
    //                 onChange={handleOnChange}
    //             />
    //         </div>
    //     )
    // }
    function getCustomerList() {
        const url="https://frebi.willandskill.eu/api/v1/customers/"
        const token=localStorage.getItem("TOKEN")

        fetch(url,{
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then(data=>setCustomerList(data.results))
    }
        useEffect(()=>{
            // getUserInfo()
        },[])

        useEffect(()=>{
            getCustomerList()
        },[])

         // *get userInfo
    function getUserInfo() {
        const url= "https://frebi.willandskill.eu/api/v1/me/"
        const token =localStorage.getItem("TOKEN")
        console.log(token);

        fetch(url,{
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then(data=>setUserInfo(data))
        // history.push("/customers")
    }

    
    return (
        <div>
            <UserInfo/>
            {/* <p>{userInfo.firstName}</p>
            <p>{userInfo.lastName}</p>
            <p>{userInfo.email}</p> */}
            
            {/* <form onSubmit={handleOnSubmit}>
                {renderInput("name", "Customer Name","Name")}
                {renderInput("organistationNr", "Organisation Number")}
                {renderInput("vatNr", "Vat Namber ")}
                {renderInput("reference", "Reference ")}
                {renderInput("paymentTerm", "Payment Term", "number")}
                {renderInput("website", "Website " , "url")}
                {renderInput("email", "Customer Email","email")}
                {renderInput("phoneNumber", "Phone Number", "tel")}
                
                <button type="submit">Create Customers</button>
            </form>
            <code>{JSON.stringify(formData)}</code> */}


            {customerList.map(item=>{
                return(<CustomerListItem key={item.id} customerData={item}/>)
            })}
        
        </div>
    )
}
