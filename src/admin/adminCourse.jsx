import React, { useState, useEffect } from "react";
import Sidebar from "../components/SideBar";
import { FaBars, FaTimes } from "react-icons/fa";
import BlueButton from "../components/button";

export default function AdminCourse() {
  const [courses, setCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    duration: "",
  });
  const [editingCourse, setEditingCourse] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Load courses from localStorage on component mount
  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(storedCourses);
  }, []);

  // Save courses to localStorage whenever courses state changes
  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleSave = () => {
    if (editingCourse) {
      setCourses(
        courses.map((course) =>
          course.id === editingCourse.id
            ? { ...editingCourse, ...newCourse }
            : course
        )
      );
      setEditingCourse(null);
    } else {
      setCourses([...courses, { id: Date.now(), ...newCourse }]);
    }
    setNewCourse({ title: "", description: "", duration: "" });
    setShowModal(false);
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setNewCourse(course);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
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
          <h1 className="text-3xl font-bold text-gray-800">Course Management</h1>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md transition-colors duration-300"
            onClick={() => setShowModal(true)}
          >
            Add Course
          </button>
        </header>

        <div className="bg-white p-6 rounded-lg shadow-md">
          {courses.length > 0 ? (
            <div className="overflow-x-auto max-h-[480px]">
              <table className="w-full table-auto border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-2 border">Title</th>
                    <th className="text-left px-4 py-2 border">Description</th>
                    <th className="text-left px-4 py-2 border">Duration</th>
                    <th className="text-left px-4 py-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <tr
                      key={course.id}
                      className="cursor-pointer hover:bg-gray-50"
                    >
                      <td className="px-4 py-2 border">{course.title}</td>
                      <td className="px-4 py-2 border">{course.description}</td>
                      <td className="px-4 py-2 border">{course.duration}</td>
                      <td className="px-4 py-2 border flex space-x-2">
                        <BlueButton
                          text="Edit"
                          className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md"
                          onClick={() => handleEdit(course)}
                        />
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                          onClick={() => handleDelete(course.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center text-gray-600 py-10">
              <p className="text-lg font-medium">No Courses at this time</p>
              <p className="text-sm">
                Courses will appear here once added to your system.
              </p>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">
              {editingCourse ? "Edit Course" : "Add Course"}
            </h2>
            <input
              type="text"
              name="title"
              placeholder="Course Title"
              value={newCourse.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
            />
            <textarea
              name="description"
              placeholder="Course Description"
              value={newCourse.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
            ></textarea>
            <input
              type="text"
              name="duration"
              placeholder="Course Duration"
              value={newCourse.duration}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-md"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
