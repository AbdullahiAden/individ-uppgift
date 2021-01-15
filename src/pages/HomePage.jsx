import React, {useContext, useEffect, useState } from 'react'
import { useHistory,Link } from 'react-router-dom'
import CustomerListItem from '../components/CustomerListItem'
import UserInfo from '../components/UserInfo'
import { CustomersListContext } from '../Contexts/CustomersListContext'
import { UserContext } from '../Contexts/UserContext'

import styled from "styled-components";

import Wrapper from "../components/Wrapper";

export default function HomePage() {
    const {userInfo, setUserInfo}=useContext(UserContext)

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
    }
    
    return (
        <div>
            <UserInfo/>
          
        
        </div>
    )
}