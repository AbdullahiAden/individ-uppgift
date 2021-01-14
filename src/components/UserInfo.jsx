import React, { useContext, useEffect } from 'react'
import { UserContext } from '../Contexts/UserContext'

export default function UserInfo({userData}) {
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
        <div>
            <p>{userInfo.firstName}</p>
            <p>{userInfo.lastName}</p>
            <p>{userInfo.email}</p>
        </div>
    )
}
