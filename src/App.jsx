import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './admin/admin'
import Teacher from './teacher/teacher'
import Student from './student/student'

function App() {

  return (
    <>
           <BrowserRouter>
      <Routes>
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
