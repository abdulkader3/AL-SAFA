import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Page/Home.jsx'
import Layout from './Layout/Layout.jsx'



const App = () => {
  

  const reactApp = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout/>}>

        <Route index element={<Home/>}/>

        
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
