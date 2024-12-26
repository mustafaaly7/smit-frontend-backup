import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./admin/admin";
import Teacher from "./teacher/teacher";
import Student from "./student/student";
import Login from "./login";
import AdminTeacher from "./admin/adminTeacher";
import AdminTeacherDetails from "./admin/adminTeacherDetail";
import AdminStudent from "./admin/adminStudent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/student" element={<Student />} />
          <Route path="/adminTeacher" element={<AdminTeacher />} />
          <Route path="/teacher/:id" element={<AdminTeacherDetails />} />  {/* The route for the Teacher Details page */}
          <Route path="/adminStudent" element={<AdminStudent />} />


          {/* Use :id here */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
