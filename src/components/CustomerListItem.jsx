import React from 'react'
import { Link } from 'react-router-dom'

import styled from "styled-components";

    const StyledLinks =styled.h1`
    padding-left:1rem;
    font-size:2rem;
`
export default function CustomerListItem({customerData}) {



    return (
        <div>
            <StyledLinks >
            <Link to ={`/customers/${customerData.id}`} >
                {customerData.name}

            </Link>  
            </StyledLinks>
        </div>
    )
}
