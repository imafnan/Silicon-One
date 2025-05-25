import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import LayoutOne from './components/layuout/LayOutOne'

function App() {
  const myRoute = createBrowserRouter(createRoutesFromElements(
   
    <Route path='/' element={<LayoutOne/>}>
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
