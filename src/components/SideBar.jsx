import { Link } from "react-router-dom";
import {
  FaHome,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaBook,
  FaCog,
  FaFileAlt,
} from "react-icons/fa";
import logo from "../assets/images/logo-OpazD70S.png";

export default function Sidebar() {
  return (
    <div className="h-screen p-4 flex flex-col bg-[#44a1dc] text-white">
      <div className="text-center mb-8 flex justify-center items-center">
        <img src={logo} alt="logo" className="w-36 p-2 rounded-full" />
      </div>
      <div className="flex-1 overflow-y-auto">
        {/* Navigation Links */}
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/Admin"
                className="flex items-center space-x-2 hover:text-gray-300"
              >
                <FaHome size={18} />
                <span>Student Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/AdminTeacher"
                className="flex items-center space-x-2 hover:text-gray-300"
              >
                <FaChalkboardTeacher size={18} />
                <span>Teachers</span>
              </Link>
            </li>
            <li>
              <Link
                to="/AdminStudent"
                className="flex items-center space-x-2 hover:text-gray-300"
              >
                <FaUserGraduate size={18} />
                <span>Students/Classes</span>
              </Link>
            </li>
            <li>
              <Link
                to="/AdminCourse"
                className="flex items-center space-x-2 hover:text-gray-300"
              >
                <FaBook size={18} />
                <span>Manage Courses</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Settings"
                className="flex items-center space-x-2 hover:text-gray-300"
              >
                <FaCog size={18} />
                <span>Settings and Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Exams"
                className="flex items-center space-x-2 hover:text-gray-300"
              >
                <FaFileAlt size={18} />
                <span>Exams</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
