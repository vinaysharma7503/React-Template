import React, { Suspense, lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import  Protected from '../src/HOC/protected';
// import Login from './Pages/Login/LoginPage';
const LoginPage = lazy(() => import('@Pages/Login'));
const Forgot = lazy(() => import('@Pages/Forgot Password'));
const Verify = lazy(()=>import('@Pages/Verify Otp'));
const Reset = lazy(()=>import('@Pages/ResetPassword'));
const Dashboard = lazy(() => import('@Pages/Dashboard/dashboard'));
const Main = lazy(() => import('@Pages/Dashboard/main'))
const User = lazy(() => import('@Pages/Dashboard/userlist'));

function App() {
  const routes = useRoutes([
    { path: '/', element: <LoginPage /> },
    {path:'/forgot', element:<Forgot/>},
    {path:'/verify', element:<Verify/>},
    {path:'/reset-password', element:<Reset/>},
    {
      path: '/dashboard', element: <Protected element={<Dashboard />}/>, children: [
        { path: '', element: <Main />},
        { path: 'users', element: <User /> },
      ]
    },
    
  ])

  return (
    <div className="">

      <Suspense fallback="Loading...">
        {routes}
      </Suspense>
    </div>
  )
}

export default App
