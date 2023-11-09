import React from 'react'
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './Pages/Home/Home';
import Chats from './Pages/Chats/Chats';
import Orders from './Pages/Orders/Orders';
import Settings from './Pages/Settings/Settings';
import Store from './Pages/Store/Store';
import Wallet from './Pages/Wallet/Wallet';
import Sidebar from './Components/Sidebar/Sidebar';
import EditCraft from './Pages/Store/EditCraft/EditCraft';

const App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Sidebar />,
      children:[
        {
        path:'/',
        element:<Home />
        },
        {
          path:'chats',
          element:<Chats />
        },
        {
          path:"orders",
          element:<Orders />
        },
      
        {
          path:"settings",
          element:<Settings />
        },
        {
          path:"store",
          element:<Store />
        },
        {
          path:"wallet",
          element:<Wallet />
        }, {
          path:"editcraft",
          element:<EditCraft />
        },
      ]

    }
  ])
  return (
  
<div>
<RouterProvider router={router} /> 


</div> 
 );
 
};

export default App


