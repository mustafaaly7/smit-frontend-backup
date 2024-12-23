    import { useState } from "react";
    import { Link } from "react-router-dom";
    import images from "../assets/images/logo-OpazD70S.png";

    function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center justify-between w-full md:w-auto">
            <Link
                to="/"
                className="flex title-font font-medium items-center text-gray-900"
            >
                <img
                src={images}
                alt="All in One"
                className="w-24 p-2 rounded-full font-mono"
                />
            </Link>
            {/* Hamburger Menu */}
            <button
                className="md:hidden text-gray-900 focus:outline-none"
                onClick={toggleMenu}
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.75h16.5M3.75 12h16.5m-16.5 6.25h16.5"
                />
                </svg>
            </button>
            </div>

            {/* Navigation Links */}
            <div
            className={`${
                isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 font-bold mt-4 md:mt-0`}
            >
            <Link
                to="/admin"
                className="relative group text-gray-900 hover:text-blue-500"
            >
                admin
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
                to="/teacher"
                className="relative group text-gray-900 hover:text-blue-500"
            >
                teacher
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
                to="/student"
                className="relative group text-gray-900 hover:text-blue-500"
            >
                student
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            </div>
        </div>
        </header>
    );
    }

    export default Header;
