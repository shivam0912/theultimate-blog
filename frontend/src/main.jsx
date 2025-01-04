import {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './routes/Homepage.jsx';
import PostListPage from './routes/PostListPage.jsx';
import LoginPage from './routes/LoginPage.jsx';
import RegisterPage from './routes/RegisterPage.jsx'
import Write from './routes/Write.jsx'
import SinglePostPage from './routes/SinglePostPage.jsx'
import MainLayout from './layouts/MainLayout.jsx';
import {ClerkProvider} from '@clerk/clerk-react'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

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
        path:"/signup",
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
      <RouterProvider router={router}/>
    </ClerkProvider>
    
  </StrictMode>,
)
