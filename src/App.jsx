import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Layout from './components/Layout/Layout.jsx'

function App() {
  const myRoute = createBrowserRouter(createRoutesFromElements(
   
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
   </Route>
  ))

  return (
    <>
      <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
