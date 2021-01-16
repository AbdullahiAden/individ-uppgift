import React, {useContext, useEffect, useState } from 'react'
import { useHistory,Link } from 'react-router-dom'
import CustomerListItem from '../components/CustomerListItem'
import UserInfo from '../components/UserInfo'
import { CustomersListContext } from '../Contexts/CustomersListContext'
import { UserContext } from '../Contexts/UserContext'


export default function HomePage() {
    return (
        <div>
            <UserInfo/>
        
        </div>
    )
}