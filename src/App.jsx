import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { HeaderComponent } from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeContent from './components/EmployeeContent'
import ListDepartmentComponent from './components/ListDepartmentComponent'
import DepartmentContent from './components/DepartmentContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* // http://localhost:3000 */}
          <Route path='/' element={<ListEmployeeComponent />}></Route>
          {/* // http://localhost:3000/employees */}
          <Route path='/employees' element={<ListEmployeeComponent />}></Route>
          {/* // http://localhost:3000/add-employee */}
          <Route path='/add-employee' element={<EmployeeContent />}></Route>
          {/* // http://localhost:3000/edit-employee/1 */}
          <Route path='/edit-employee/:id' element={<EmployeeContent />}></Route>
          {/* // http://localhost:3000/departments */}
          <Route path='/departments' element={<ListDepartmentComponent />}></Route>

          {/* // http://localhost:3000/add-department */}
          <Route path='/add-department' element={<DepartmentContent />}></Route>

          {/* // http://localhost:3000/update-department/1 */}
          <Route path='/update-department/:id' element={<DepartmentContent />}></Route>

        </Routes>
        <FooterComponent />
      </BrowserRouter>

    </>
  )
}

export default App
