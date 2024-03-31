import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login/Login.jsx';
import Registration from './pages/Registration/Registration.jsx';
import Tasks from './components/Tasks/Tasks.jsx';
import AuthProvider from './providers/AuthProvider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Tasks />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reg",
    element: <Registration />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster
      position="bottom-left"
      reverseOrder={false}
    />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
