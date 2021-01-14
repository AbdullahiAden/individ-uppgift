import React, {useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import CustomerListItem from '../components/CustomerListItem'
import UserInfo from '../components/UserInfo'
import { CustomersListContext } from '../Contexts/CustomersListContext'
import { UserContext } from '../Contexts/UserContext'

export default function HomePage() {
    const {userInfo, setUserInfo}=useContext(UserContext)

    const {customerList,setCustomerList}=useContext(CustomersListContext)

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
        // ******************************
        .then(data=>setCustomerList(data))
    }
        useEffect(()=>{
            getUserInfo()
        },[])

        // ***map not func, mapping down should off
        useEffect(()=>{
            // getCustomerList()
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
            
            
           


            {/* {customerList.map(item=>{
                return(<CustomerListItem key={item.id} customerData={item}/>)
            })} */}
        
        </div>
    )
}