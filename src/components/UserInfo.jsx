import React, { useContext } from 'react'
import { UserContext } from '../Contexts/UserContext'

export default function UserInfo({userData}) {
    const {user, setUser}=useContext(UserContext)

    return (
        <div>
            {/* {console.log(userData)} */}

            {/* <p>{firstName}</p>
            <p>{userData.lastName}</p>
            <p>{userData.email}</p> */}
            
            {/* <p>{userData.email}</p> */}
            
            
        </div>
    )
}
