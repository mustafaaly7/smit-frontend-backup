import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlueButton from "../components/button";
import Sidebar from "../components/SideBar";
import Papa from "papaparse";
import AddTeacherDialog from "../components/AddTeacherDialogue";
import { FaBars, FaTimes } from "react-icons/fa";

export default function AdminTeacher() {
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [teachers, setTeachers] = useState(
    JSON.parse(localStorage.getItem("teachers")) || []
  );
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleAddTeacher = () => {
    if (
      form.fullName &&
      form.email &&
      form.batch &&
      form.gender &&
      form.password &&
      form.phone &&
      form.subject
    ) {
      const updatedTeachers = [...teachers, form];
      setTeachers(updatedTeachers);
      localStorage.setItem("teachers", JSON.stringify(updatedTeachers));
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

  const handleCSVImport = (e) => {
    const file = e.target.files[0];
    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          const importedTeachers = result.data.map((teacher) => ({
            fullName: teacher[0],
            email: teacher[1],
            batch: teacher[2],
            gender: teacher[3],
            password: teacher[4],
            phone: teacher[5],
            subject: teacher[6],
            picture: teacher[7],
          }));

          const updatedTeachers = [...teachers, ...importedTeachers];
          setTeachers(updatedTeachers);
          localStorage.setItem("teachers", JSON.stringify(updatedTeachers));
        },
        header: false,
        error: (error) => {
          console.error("Error parsing CSV file: ", error.message);
        },
      });
    }
  };

  const handleTeacherClick = (id) => {
    navigate(`/teacher/${id}`);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Mobile Navbar */}
      <div className="lg:hidden flex items-start justify-between p-4 bg-[#44a1dc] text-white">
        <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed z-10 top-0 left-0 h-full bg-[#44a1dc] text-white p-4 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:block`}
      >
        <Sidebar />
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-6">
        <header className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Teachers</h1>
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
              text="Add Teachers"
              className="w-46 flex justify-end items-center"
              style={{ height: "40px" }}
              onClick={() => setShowDialog(true)}
            />
          </div>
        </header>

        <div className="bg-white p-6 rounded-lg shadow-md">
          {teachers.length > 0 ? (
            <div className="overflow-x-auto max-h-[480px]">
              <table className="w-full table-auto border border-gray-300">
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
                  {teachers.map((teacher, index) => (
                    <tr
                      key={index}
                      onClick={() => handleTeacherClick(index)}
                      className={`cursor-pointer ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <td className="px-4 py-2 border">
                        {teacher.picture && (
                          <img
                            src={teacher.picture}
                            alt="Teacher"
                            className="w-12 h-12 object-cover rounded-full"
                          />
                        )}
                      </td>
                      <td className="px-4 py-2 border">{teacher.fullName}</td>
                      <td className="px-4 py-2 border">{teacher.subject}</td>
                      <td className="px-4 py-2 border">{teacher.batch}</td>
                      <td className="px-4 py-2 border">{teacher.email}</td>
                      <td className="px-4 py-2 border">{teacher.gender}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center text-gray-600 py-10">
              <p className="text-lg font-medium">No Teachers at this time</p>
              <p className="text-sm">
                Teachers will appear here after they enroll in your school.
              </p>
            </div>
          )}
        </div>
      </div>

      {showDialog && (
        <AddTeacherDialog
          form={form}
          setForm={setForm}
          handleAddTeacher={handleAddTeacher}
          setShowDialog={setShowDialog}
        />
      )}
    </div>
  );
}
