import {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

import HomePage from './routes/HomePage.jsx';
import PostListPage from './routes/PostListPage.jsx';
import LoginPage from './routes/LoginPage.jsx';
import RegisterPage from './routes/RegisterPage.jsx'
import Write from './routes/Write.jsx'
import SinglePostPage from './routes/SinglePostPage.jsx'
import MainLayout from './layouts/MainLayout.jsx';
import {ClerkProvider} from '@clerk/clerk-react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const queryClient = new QueryClient()
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const router = createBrowserRouter([
  { 
    element:<MainLayout/>,
    children:[
      {
        path: "/",
        element:<HomePage/>
      },
      {
        path: "/posts",
        element: <PostListPage/>,
      },
      {
        path:"/:slug",
        element:<SinglePostPage/>
      },
      {
        path:"/login",
        element:<LoginPage/>
      },
      {
        path:"/register",
        element:<RegisterPage/>
      },
      {
        path:"/write",
        element:<Write/>
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
        <ToastContainer position="bottom-right" />
      </QueryClientProvider>
    </ClerkProvider>
    
  </StrictMode>,
)
