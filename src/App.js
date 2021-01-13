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
  // const [user,setUser]=useState(null)
  // const values= useMemo(()=>({user, setUser}), [user, setUser])

  // const userDataContext={
  //   firstName,
  //   lastName,
  //   email
  // }

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
      <Switch>

        {/* <UserContext.Provider value={values}> */}

        <Route  path="/home/create">
          <CustomerCreatePage/>
        </Route>
        <Route  path="/home" >
             <HomePage/>
        </Route>
        <Route  path="/login">
          <LoginPage/>
        </Route>

        {/* <Route path="/customers/:id/" component={CustomerDetailsPage}/> */}


          <Route exact path="/home">
              <CustomerListPage/>
          </Route>
        {/* </UserContext.Provider> */}
       
      </Switch>
      

      
      
     
    </div>
  );
}

export default App;
