import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import User from './component/User'
import Create from './component/Create'
import Update from './component/Update'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<User/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/update/:id' element={<Update/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
