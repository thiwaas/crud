/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { useState } from 'react'
import '../src/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (

      <BrowserRouter>
        <Routes>
          <Route path= '/' element={<USers></USers>}></Route>
          <Route path= '/' element={<CreateUser></CreateUser>}></Route>
          <Route path= '/' element={<UpdateUser></UpdateUser>}></Route>
        </Routes>

      </BrowserRouter>
  )
}


export default App;