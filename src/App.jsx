import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from "react-router-dom"
import Home from "./Component/Home"
import About from "./Component/About"
import Redux from "./Component/Redux"


const App = () => {

  const Router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/Redux' element={<Redux/>}/>
        <Route path='/About' element={<About/>}/>

    </Route>
  ))
  return (
    
    
    <>
      
      <RouterProvider Router={Router}/>
    </>
  )
}

export default App
