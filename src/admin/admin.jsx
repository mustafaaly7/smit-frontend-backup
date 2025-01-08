
import { useState, useEffect } from "react";

import { useState } from "react";

import BlueButton from "../components/button";
import Sidebar from "../components/SideBar";
import ThemeText from "../components/Themetext";
import { FaBars, FaTimes } from "react-icons/fa";

import StateCard from "../components/StateCard";


const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  // State variables for courses, teachers, students, and active courses
  const [courses, setCourses] = useState(0);
  const [teachers, setTeachers] = useState(0);
  const [students, setStudents] = useState(0);
  const [activeCourses, setActiveCourses] = useState(0);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  // Fetch data from localStorage on component mount
  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    const storedTeachers = JSON.parse(localStorage.getItem("teachers")) || [];
    const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    const storedActiveCourses = storedCourses.filter(course => course.isActive).length;

    setCourses(storedCourses.length);
    setTeachers(storedTeachers.length);
    setStudents(storedStudents.length);
    setActiveCourses(storedActiveCourses);
  }, []);


  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Navbar for Mobile/Tablet */}
      <div className="lg:hidden flex items-start p-4 bg-[#44a1dc] text-white">
 
        <button onClick={toggleSidebar} className="text-white text-2xl focus:outline-none">

        <button
          onClick={toggleSidebar}
          className="text-white text-2xl focus:outline-none"
        >

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
        <div className="fixed inset-0 bg-black bg-opacity-50 lg:hidden" onClick={toggleSidebar}></div>

        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>

      )}

      {/* Main Content */}
      <div className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <ThemeText text={"Welcome to your dashboard , S.M.I.T"} className={"text-3xl"} />
          <BlueButton text="LogOut" className="w-20" />
        </header>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <StateCard
            icon="fa-user-graduate"
            iconColor="text-blue-500"
            title="Total Students"
            value={students}
          />
          <StateCard
            icon="fa-chalkboard-teacher"
            iconColor="text-blue-500"
            title="Total Teachers"
            value={teachers}
          />
          <StateCard
            icon="fa-users"
            iconColor="text-blue-500"
            title="Total Employee"
            value="600"
          />
          <StateCard
            icon="fa-dollar-sign"
            iconColor="text-blue-500"
            title="Total Earnings"
            value="$10,000"
          />
        </div>

        {/* Pie chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500 mb-4">Total Students by Gender</p>
            <div className="flex justify-center items-center">
              <div className="relative">
                <img
                  alt="Pie chart showing total students by gender"
                  className="w-40 h-40"
                  height="150"
                  src="https://storage.googleapis.com/a1aa/image/bj6lueHZzpXUTKQeWP6Dve2xl61HGLNOcfh36Cwfuqjby09fE.jpg"
                  width="150"
                />
                <div className="absolute inset-0 flex justify-center items-center text-2xl font-bold">
                  {students}
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="mr-4">
                <span className="text-blue-500">Boys: 1500</span>
              </div>
              <div>
                <span className="text-teal-500">Girls: 1000</span>
              </div>
            </div>
          </div>

          {/* Attendance chart */}
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500">Attendance</p>
              <div className="flex space-x-2">
                <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded">This week</button>
                <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded">Class 10</button>
              </div>
            </div>
            <div>
              <img
                alt="Bar chart showing attendance"
                className="w-full h-48"
                height="200"
                src="https://storage.googleapis.com/a1aa/image/6oPyjSUJAKIlF1iAl8XcQ7BySyLYXot4olR5nA6I89alp7fJA.jpg"
                width="300"
              />
            </div>
            <div className="flex justify-center mt-4">
              <div className="mr-4">
                <span className="text-blue-500">Total Present</span>
              </div>
              <div>
                <span className="text-teal-500">Total Absent</span>
              </div>
            </div>
=======
          <ThemeText
            text={"Welcome to your dashboard , S.M.I.T"}
            className={"text-3xl"}
          />
          <BlueButton text="LogOut" className="w-20" />
        </header>
        <div className="space-y-4">
          <div className="p-4 bg-white rounded shadow">
            <h2 className="font-semibold text-lg">Add other admins</h2>
            <p className="text-sm text-gray-600">
              Create rich course content and coaching products for your
              students. When you give them a pricing plan, they’ll appear on
              your site!
            </p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h2 className="font-semibold text-lg">Add classes</h2>
            <p className="text-sm text-gray-600">
              Create rich course content and coaching products for your
              students. When you give them a pricing plan, they’ll appear on
              your site!
            </p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h2 className="font-semibold text-lg">Add students</h2>
            <p className="text-sm text-gray-600">
              Create rich course content and coaching products for your
              students. When you give them a pricing plan, they’ll appear on
              your site!
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
