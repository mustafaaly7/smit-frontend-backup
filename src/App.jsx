import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import TeacherProfile from "./teacher/teacher-Profile";
import StudentList from "./teacher/Student-Assignment-List";
import { useContext } from "react";
import { authContext } from "./context/userContext";
function App() {
  const{user,setuser} = useContext(authContext)
console.log("USER =>" , user);


  

  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route index element={user ? <Navigate to="/student" /> : <Login />} />
        <Route path="/teacher" element={user ? <Teacher /> : <Navigate to="/" />} />
        <Route path="/student" element={user ? <Student /> : <Navigate to="/" />} />
        <Route path="/admin" element={user ? <Admin /> : <Navigate to="/" />} />
        <Route path="/adminTeacher" element={user ? <AdminTeacher /> : <Navigate to="/" />} />
        <Route path="/teacher/:id" element={user ? <AdminTeacherDetails /> : <Navigate to="/" />} />
        <Route path="/adminStudent" element={user ? <AdminStudent /> : <Navigate to="/" />} />
        <Route path="/adminCourse" element={user ? <AdminCourse /> : <Navigate to="/" />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/studentcourse" element={user ? <Courses /> : <Navigate to="/" />} />
        <Route path="/assignments/:courseId" element={user ? <Assignments /> : <Navigate to="/" />} />
        <Route path="/teacher-profile" element={user ? <TeacherProfile /> : <Navigate to="/" />} />
        <Route path="/student-list/:id" element={user ? <StudentList /> : <Navigate to="/" />} />
        <Route path="/studentProfile" element={user ? <StudentProfile /> : <Navigate to="/" />} />
        </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
