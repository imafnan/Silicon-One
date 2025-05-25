import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import './App.css'
import LayOutOne from './components/layout/LayOutOne'
import Home from './pages/Home'

function App() {
  const myRoute = createBrowserRouter(createRoutesFromElements(
   
    <Route path='/' element={<LayOutOne/>}>
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
