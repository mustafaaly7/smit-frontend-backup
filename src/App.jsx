import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./admin/admin";
import Teacher from "./teacher/teacher";
import Student from "./student/student";
import Login from "./login";
import TeacherProfile from "./teacher/teacher-Profile";
import StudentList from "./teacher/Student-Assignment-List";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/student" element={<Student />} />
          <Route path="/teacher-profile" element={<TeacherProfile />} />
          <Route path="/student-list/:id" element={<StudentList />} />

          {/* Use :id here */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
