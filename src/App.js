import React, { useMemo, useState } from 'react';
import { Route, Switch,Link } from 'react-router-dom';

import './App.css';
import { UserContext } from './Contexts/UserContext';
import {CustomersListContext} from './Contexts/CustomersListContext';
import CustomerCreatePage from './pages/CustomerCreatePage';
import CustomerDetailsPage from './pages/CustomerDetailsPage';
import CustomerListPage from './pages/CustomerListPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  const [userInfo,setUserInfo]=useState({})
  // ****
  const [customerList, setCustomerList]=useState([])
  // const values= useMemo(()=>({customerList, setCustomerList}), [customerList, setCustomerList])

  const userDataContext={userInfo,setUserInfo}
  const CustomersListContextValue={customerList,setCustomerList}


  return (
    <div >

      <ul>
        <li>
          <Link to="/home/create">Create Customer</Link>
        </li>
        <li>
          <Link to="/home"> Customers</Link>
        </li>
      </ul>

      <CustomersListContext.Provider value={CustomersListContextValue}>

        <Switch>
          <Route path="/customers/:id/" component={CustomerDetailsPage} />

          <Route  path="/home/create">
            <CustomerCreatePage/>
          </Route>

          <UserContext.Provider value={userDataContext}>  
            <Route  path="/home" >
              <HomePage/>
            </Route>
            <Route  path="/home">
              <CustomerListPage/>
            </Route>

            <Route  path="/login">
              <LoginPage/>
            </Route>
          </UserContext.Provider>   

        </Switch>
      </CustomersListContext.Provider>

    </div>
  );
}

export default App;