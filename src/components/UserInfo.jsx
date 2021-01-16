import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { UserContext } from '../Contexts/UserContext'


const StyledP=styled.p`
font-size:20px;
display:flex;
padding-left:1rem;
`

export default function UserInfo() {
    const {userInfo, setUserInfo}=useContext(UserContext)

    useEffect(()=>{
        getUserInfo()
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
        }

    return (
        <div >
            <StyledP>{userInfo.firstName}</StyledP>
            <StyledP>{userInfo.lastName}</StyledP>
            <StyledP>{userInfo.email}</StyledP>

        </div>
    )
}
