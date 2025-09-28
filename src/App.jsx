import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Page/Home.jsx'
import Layout from './Layout/Layout.jsx'
import Plan from './Component/Plan/Plan.jsx'



const App = () => {
  

  const reactApp = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout/>}>

        <Route index element={<Home/>}/>
        <Route path="/plan" element={<Plan/>}/>

        
        </Route>
      </Route>
    )
  )

  return (
    <>

    <RouterProvider router={reactApp}/>
      
    </>
  )
}

export default App
