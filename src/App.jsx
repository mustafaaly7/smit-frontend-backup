import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./admin/admin";
import Teacher from "./teacher/teacher";
import Student from "./student/student";
import Login from "./login";
import AdminTeacher from "./admin/adminTeacher";
import AdminTeacherDetails from "./admin/adminTeacherDetail";
import AdminStudent from "./admin/adminStudent";

import AdminCourse from "./admin/adminCourse";
import ForgotPassword from "./forgotPassword";
import Courses from "./student/studentCourse";
import Assignments from "./student/studentAssignment";
import StudentProfile from "./student/studentProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/student" element={<Student />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminTeacher" element={<AdminTeacher />} />
          <Route path="/teacher/:id" element={<AdminTeacherDetails />} />
          <Route path="/adminStudent" element={<AdminStudent />} />
          <Route path="/adminCourse" element={<AdminCourse />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/studentcourse" element={<Courses />} />
          <Route path="/assignments/:courseId" element={<Assignments />} /> {/* Define the Assignments route */}

          <Route path="/studentProfile" element={<StudentProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
