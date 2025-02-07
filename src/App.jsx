import Header from "./Component/Navigation/Header"
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from "./Pages/About"
import Menu from "./Pages/Menu"
import Stories from "./Pages/Stories"
import Contact from "./Pages/Contact"
import BookATable from "./Pages/BookATable"
import Layout from "./Hoc/Layout"

function App() {
  return (
    <>
      
      <Routes>
        <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}></Route>
         <Route path='/About' element={<About/>}></Route>
         <Route path='/Menu' element={<Menu/>}></Route>
         <Route path='/Stories' element={<Stories/>}></Route>
         <Route path='/Contact' element={<Contact/>}></Route>
         <Route path='/BookATable' element={<BookATable/>}></Route>
         </Route>
      </Routes>
    </>
  )
}

export default App
