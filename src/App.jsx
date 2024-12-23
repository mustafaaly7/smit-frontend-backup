import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './admin/admin'
import Teacher from './teacher/teacher'
import Student from './student/student'
import Login from './login'

function App() {

  return (
    <>
           <BrowserRouter>
      <Routes>
      <Route index element={<Login />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />

        {/* Use :id here */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
