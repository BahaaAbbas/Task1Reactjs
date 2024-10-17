import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Search from "../components/Search";
import Details from "../components/Details";


  const router = createBrowserRouter ([
    {
        path: '/',
        element: <App />,
        children : [
            {
                path: '',
                element: <Home/>

            },
            {
                path: 'search',
                element: <Search/>

            },

            {
                path: 'details/:id',
                element: <Details/>

            },
       

        ]
    }
])

export default router