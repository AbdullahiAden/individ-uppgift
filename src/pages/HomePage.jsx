import React, {useContext, useEffect, useState } from 'react'
import { useHistory,Link } from 'react-router-dom'
import CustomerListItem from '../components/CustomerListItem'
import UserInfo from '../components/UserInfo'
import { CustomersListContext } from '../Contexts/CustomersListContext'
import { UserContext } from '../Contexts/UserContext'
import CustomerListPage from './CustomerListPage'



export default function HomePage() {
    return (
        
        <div>
            <ul>
                <li>
                    <Link to="/home/create">Create Customer</Link>
                </li>
                {/* <li>
                    <Link to="/home">View Customers</Link>
                </li> */}
            </ul>

            <UserInfo/>
            <CustomerListPage/>
        
        </div>
    )
}