import { useState, useEffect } from "react";
import BlueButton from "../components/button";
import ThemeText from "../components/Themetext";
import { FaBars, FaTimes } from "react-icons/fa";
import StudentSidebar from "../components/studentsidebar";
import { Link } from "react-router-dom";

const Student = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [assignments, setAssignments] = useState([]); // State for assignments
  const [selectedAssignment, setSelectedAssignment] = useState(null); // Selected assignment for popup
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup visibility state

  // Fetch assignments (mock data for now)
  useEffect(() => {
    const mockAssignments = [
      {
        id: 1,
        title: "HTML Basics",
        dueDate: "2025-01-10",
        description:
          "Create a simple webpage using HTML that includes headings, paragraphs, and a table.",
      },
      {
        id: 2,
        title: "CSS Flexbox and Grid",
        dueDate: "2025-01-15",
        description:
          "Design a responsive webpage layout using Flexbox and CSS Grid.",
      },
      {
        id: 3,
        title: "JavaScript DOM Manipulation",
        dueDate: "2025-01-20",
        description:
          "Implement a to-do list that allows adding, editing, and deleting tasks using JavaScript DOM methods.",
      },
    ];

    setAssignments(mockAssignments); // Set mock data into state
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Open popup with assignment details
  const handleShowDetails = (assignment) => {
    setSelectedAssignment(assignment);
    setIsPopupOpen(true);
  };

  // Close popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedAssignment(null);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Navbar for Mobile/Tablet */}
      <div className="lg:hidden flex items-start p-4 bg-[#44a1dc] text-white">
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
        <StudentSidebar />
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <ThemeText
            text={"Welcome to your student dashboard, S.M.I.T"}
            className={"text-3xl"}
          />
          <Link to={"/"}>
            <BlueButton text="LogOut" className="w-20" />
          </Link>
        </header>

        <div className="space-y-4">
          <div className="p-4 bg-white rounded shadow">
            <h2 className="font-semibold text-lg">Assignments</h2>
            {assignments.length > 0 ? (
              <ul className="space-y-4">
                {assignments.map((assignment) => (
                  <li
                    key={assignment.id}
                    className="p-4 bg-gray-100 rounded shadow-sm flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-semibold text-lg">
                        {assignment.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Due Date: {assignment.dueDate}
                      </p>
                    </div>
                    <button
                      onClick={() => handleShowDetails(assignment)}
                      className="bg-[#44a1dc] text-white px-4 py-2 rounded hover:bg-[#3690c7] transition"
                    >
                      Show Now
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No assignments available.</p>
            )}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && selectedAssignment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">
              {selectedAssignment.title}
            </h2>
            <p className="text-gray-600 mb-2">
              <strong>Due Date:</strong> {selectedAssignment.dueDate}
            </p>
            <p className="text-gray-700 mb-4">
              {selectedAssignment.description}
            </p>
            <div className="flex justify-end">
              <button
                onClick={closePopup}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Student;
