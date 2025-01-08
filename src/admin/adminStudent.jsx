import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BlueButton from "../components/button";
import Sidebar from "../components/SideBar";
import Papa from "papaparse";
import AddStudentDialog from "../components/AddStudentDialogue";
import StudentDetailsSidebar from "../components/StudentDetailSideBar";
import { FaBars, FaTimes } from "react-icons/fa";

export default function AdminStudent() {
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(false);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null); // State to track selected student
  const [sidebarOpen, setSidebarOpen] = useState(false); // Track sidebar open state
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false); // Mobile sidebar state
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    batch: "",
    gender: "",
    password: "",
    phone: "",
    subject: "",
    picture: "",
  });

  // Load students from localStorage when the component mounts
  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(savedStudents);
  }, []);

  const handleAddStudent = () => {
    if (
      form.fullName &&
      form.email &&
      form.batch &&
      form.gender &&
      form.password &&
      form.phone &&
      form.subject
    ) {
      const updatedStudents = [...students, form]; // Add the new student
      setStudents(updatedStudents);
      localStorage.setItem("students", JSON.stringify(updatedStudents)); // Save updated students list in localStorage
      setForm({
        fullName: "",
        email: "",
        batch: "",
        gender: "",
        password: "",
        phone: "",
        subject: "",
        picture: "",
      });
      setShowDialog(false);
    }
  };

  // CSV Import Functionality
  const handleCSVImport = (e) => {
    const file = e.target.files[0];
    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          const importedStudents = result.data.map((student) => ({
            fullName: student[0],
            email: student[1],
            batch: student[2],
            gender: student[3],
            password: student[4],
            phone: student[5],
            subject: student[6],
            picture: student[7],
          }));

          const updatedStudents = [...students, ...importedStudents];
          setStudents(updatedStudents);
          localStorage.setItem("students", JSON.stringify(updatedStudents)); // Save to localStorage
        },
        header: false, // CSV does not have headers
      });
    }
  };

  // Handle student row click to show student details in sidebar
  const handleStudentClick = (student) => {
    setSelectedStudent(student); // Set the selected student for the sidebar
    setSidebarOpen(true); // Open the sidebar
  };

  // Close the sidebar
  const closeSidebar = () => {
    setSidebarOpen(false); // Close the sidebar
    setSelectedStudent(null); // Reset selected student
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen); // Toggle mobile sidebar
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
  {/* Mobile Navbar */}
  <div className="lg:hidden flex items-start p-4 bg-[#44a1dc] text-white">
    <button
      onClick={toggleMobileSidebar}
      className="text-2xl focus:outline-none"
    >
      {isMobileSidebarOpen ? <FaTimes /> : <FaBars />}
    </button>
  </div>

  {/* Sidebar */}
   <div
          className={`fixed z-10 top-0 left-0 h-full bg-[#44a1dc] text-white p-4 transition-transform ${
            isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:relative lg:translate-x-0 lg:block`}
        >
          <Sidebar />
        </div>

  {/* Overlay for Mobile Sidebar */}
  {isMobileSidebarOpen && (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
      onClick={toggleMobileSidebar}
    ></div>
  )}

  {/* Main Content */}
  <div className="flex-1 p-6 lg:w-3/4">
    <header className="flex flex-col md:flex-row justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-gray-800">Students</h1>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <label htmlFor="csv-upload" className="cursor-pointer">
          <div className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4v16h18V4H3zm0 0l9 8 9-8"
              />
            </svg>
            <span>Import CSV</span>
          </div>
        </label>
        <input
          type="file"
          id="csv-upload"
          accept=".csv"
          onChange={handleCSVImport}
          className="hidden"
        />
        <BlueButton
          text="Add Student"
          className="w-46 flex justify-end items-center"
          style={{ height: "40px" }}
          onClick={() => setShowDialog(true)}
        />
      </div>
    </header>

    <div className="bg-white p-6 rounded-lg shadow-md">
      {students.length > 0 ? (
        <div className="overflow-x-auto max-h-[480px]">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 border">Picture</th>
                <th className="text-left px-4 py-2 border">Name</th>
                <th className="text-left px-4 py-2 border">Subject</th>
                <th className="text-left px-4 py-2 border">Batch</th>
                <th className="text-left px-4 py-2 border">Email Address</th>
                <th className="text-left px-4 py-2 border">Gender</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr
                  key={index}
                  onClick={() => handleStudentClick(student)}
                  className={`cursor-pointer ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="px-4 py-2 border">
                    {student.picture && (
                      <img
                        src={student.picture}
                        alt="Student"
                        className="w-12 h-12 object-cover rounded-full"
                      />
                    )}
                  </td>
                  <td className="px-4 py-2 border">{student.fullName}</td>
                  <td className="px-4 py-2 border">{student.subject}</td>
                  <td className="px-4 py-2 border">{student.batch}</td>
                  <td className="px-4 py-2 border">{student.email}</td>
                  <td className="px-4 py-2 border">{student.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-gray-600 py-10">
          <p className="text-lg font-medium">No Students at this time</p>
          <p className="text-sm">
            Students will appear here after they enroll in your school.
          </p>
        </div>
      )}
    </div>
  </div>

  {/* Student Details Sidebar */}
  {selectedStudent && (
    <StudentDetailsSidebar
      student={selectedStudent}
      onClose={closeSidebar}
      isOpen={sidebarOpen}
    />
  )}

  {showDialog && (
    <AddStudentDialog
      form={form}
      setForm={setForm}
      handleAddStudent={handleAddStudent}
      setShowDialog={setShowDialog}
    />
  )}
</div>

  );
}
