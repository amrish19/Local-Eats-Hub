import Header from "./components/Header"
import Signin from "./components/Signin"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Team from "./components/Team"
import Login from "./components/Login"
import Food from "./components/Food"
import Upload from "./components/Upload"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Register from "./components/Register"
import Test from "./components/Test"
import Resturant from "./components/Resturant"
import Order from "./components/Order"


function App() {
 

  return (
   <BrowserRouter>
    
   <Routes>

    <Route path="/" element={<Team/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/food" element={<Food/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/home" element={<Test/>}></Route>
    <Route path="/signin" element={<Signin/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/register" element={<Register/>}> </Route>
    <Route path="/test" element={<Test/>}> </Route>
    <Route path="/resturant/:id" element={<Resturant/>}> </Route>
    <Route path="/upload" element={<Upload/>}> </Route>
    <Route path="/order/:id" element={<Order/>}> </Route>


   </Routes>
   
   </BrowserRouter>
  )
}

export default App
