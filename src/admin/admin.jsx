import { useState } from "react";
import BlueButton from "../components/button";
import Sidebar from "../components/SideBar";
import ThemeText from "../components/Themetext";
import { FaBars, FaTimes } from "react-icons/fa";

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
      <div className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
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
