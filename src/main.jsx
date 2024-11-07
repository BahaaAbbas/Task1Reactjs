import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes.jsx';
import { GlobalProvider } from './components/GlobalContext.jsx';

// NEW -> Created Global Provider to fetch posts and wrap for components
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider> 
      <RouterProvider router={router} />
    </GlobalProvider>
  </StrictMode>
)
