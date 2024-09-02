import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./Component/Home"
import About from "./Component/About"
import Redux from "./Component/Redux"
import "./App.css"
import Card from "./Component/Card"


const App = () => {

  const Rout = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/Redux' element={<Redux/>}/>
        <Route path='/Card' element={<Card/>}/>
        <Route path='/About' element={<About/>}/>


    </Route>
  ))
  
  return (
    
    
    <>
      
    <RouterProvider router={Rout}/>
    </>
  )
}

export default App
