import React, { useState } from "react";
import { useParams } from "react-router-dom"; // useParams to read the dynamic parameter from URL
import Sidebar from "../components/SideBar"; // Assuming you have Sidebar component
import BlueButton from "../components/button"; // Assuming you have a BlueButton component
import { FaBars, FaTimes } from "react-icons/fa"; // For mobile sidebar toggle

export default function AdminTeacherDetails() {
  const { id } = useParams(); // Get the teacher ID from the URL
  const teachers = JSON.parse(localStorage.getItem("teachers")) || []; // Get teachers from localStorage
  console.log("Teachers from localStorage:", teachers); // Check if teachers are being fetched correctly

  const teacher = teachers[id]; // Find the teacher by ID from the URL parameter
  console.log("Teacher found:", teacher); // Check if the teacher is found

  if (!teacher) {
    return <p>Teacher not found</p>; // Display message if teacher is not found
  }

  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile sidebar state
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar for mobile view

  return (
    <div className="flex min-h-screen bg-gray-100">
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
      <div className="flex-1 p-10 lg:pl-64">
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center">
            <BlueButton
              text="Back To Teachers"
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => window.history.back()}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 flex flex-col items-center mb-8 lg:mb-0">
            {/* Display Teacher Profile Picture */}
            <img
              alt={`Profile picture of ${teacher.fullName}`}
              className="rounded-full mb-4"
              height="150"
              src={teacher.picture || "https://placehold.co/150"}
              width="150"
            />
            <h2 className="text-xl font-semibold">{teacher.fullName}</h2>
            <p className="text-gray-500">{teacher.subject}</p>
            <div className="flex mt-4">
              <button className="bg-gray-200 p-3 rounded-full mr-2">
                <i className="fas fa-graduation-cap text-gray-700"></i>
              </button>
              <button className="bg-gray-200 p-3 rounded-full mr-2">
                <i className="fas fa-phone text-gray-700"></i>
              </button>
              <button className="bg-gray-200 p-3 rounded-full">
                <i className="fas fa-envelope text-gray-700"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-2/3 lg:pl-10">
            <h3 className="text-xl font-semibold mb-4">About</h3>
            <p className="text-gray-500 mb-4">
              {teacher.about || "No additional information available."}
            </p>
            <div className="flex mb-4">
              <div className="w-1/2">
                <h4 className="text-gray-700">Age</h4>
                <p className="text-gray-500">{teacher.age}</p>
              </div>
              <div className="w-1/2">
                <h4 className="text-gray-700">Gender</h4>
                <p className="text-gray-500">{teacher.gender}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
