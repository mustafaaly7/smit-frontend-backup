import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./admin/admin";
import Teacher from "./teacher/teacher";
import Student from "./student/student";
import Login from "./login";

import TeacherProfile from "./teacher/teacher-Profile";
import StudentList from "./teacher/Student-Assignment-List";

import AdminTeacher from "./admin/adminTeacher";
import AdminTeacherDetails from "./admin/adminTeacherDetail";
import AdminStudent from "./admin/adminStudent";
import Courses from "./student/studentcourse";
import AssignmentsPage from "./student/studentassignment";


import AdminCourse from "./admin/adminCourse";
import ForgotPassword from "./forgotPassword";
import StudentProfile from "./student/studentprofile";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />


          <Route path="/teacher" element={<Teacher />} />
          <Route path="/student" element={<Student />} />
          <Route path="/teacher-profile" element={<TeacherProfile />} />
          <Route path="/student-list/:id" element={<StudentList />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminTeacher" element={<AdminTeacher />} />
          <Route path="/teacher/:id" element={<AdminTeacherDetails />} />  {/* The route for the Teacher Details page */}
          <Route path="/adminStudent" element={<AdminStudent />} />

          <Route path="/studentProfile" element={<StudentProfile/>}/> {/* ahsan work*/}
          {/* <Route path="/studentCourse" element={<Courses/>}/> */}
          <Route path="/studentCourse" element={<Courses />} />{/* ahsan work*/}
          <Route path="/assignments/:courseId" element={<AssignmentsPage/>} />{/* ahsan work*/}
       

          <Route path="/adminCourse" element={<AdminCourse />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />




          {/* Use :id here */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
