import React, { useMemo, useState } from 'react';
import { Route, Switch,Link } from 'react-router-dom';

import './App.css';
import { UserContext } from './Contexts/UserContext';
import CustomerCreatePage from './pages/CustomerCreatePage';
import CustomerDetailsPage from './pages/CustomerDetailsPage';
import CustomerListPage from './pages/CustomerListPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';



function App() {
  const [userInfo,setUserInfo]=useState("")
  // const values= useMemo(()=>({userInfo, setUserInfo}), [userInfo, setUserInfo])

  const userDataContext={userInfo,setUserInfo}

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
      <UserContext.Provider value={userDataContext}>

        <Switch>
          <Route path="/customers/:id/" component={CustomerDetailsPage}/>

          <Route  path="/home/create">
            <CustomerCreatePage/>
          </Route>

          <Route  path="/home" >
             <HomePage/>
          </Route>

          {/* <Route  path="/home">
          <CustomerListPage/>
          </Route> */}
          <Route  path="/login">
            <LoginPage/>
          </Route>
       
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
