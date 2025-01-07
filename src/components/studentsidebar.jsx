import { Link } from "react-router-dom";
import {
  FaHome,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaCog,
  FaFileAlt,
  FaCalendarAlt,
  FaTasks,
} from "react-icons/fa";
import logo from "../assets/images/logo-OpazD70S.png";


{/* ahsan work*/}


export default function StudentSidebar() {
  return (
    <div className="h-screen p-4 flex flex-col bg-[#44a1dc] text-white">
      <div className="text-center mb-8 flex justify-center items-center">
        <img src={logo} alt="logo" className="w-36 p-2 rounded-full" />
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/student"
                className="flex items-center space-x-2 hover:text-gray-300"
              >
                <FaHome size={18} />
                <span> student Dashboard</span>
              </Link>
            </li>
         
         
            <li>
              <Link
                to="/StudentProfile"
                className="flex items-center space-x-2 hover:text-gray-300"
              >
                <FaUserGraduate size={18} />
                <span>Student Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to="/studentCourse"
                className="flex items-center space-x-2 hover:text-gray-300"
              >
                <FaCalendarAlt size={18} />
                <span>Courses</span>
              </Link>
            </li>
            {/* <li>
              <Link
                to="/studentAssignment"
                className="flex items-center space-x-2 hover:text-gray-300"
              >
                <FaTasks size={18} />
                <span>Assignments</span>
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
}
