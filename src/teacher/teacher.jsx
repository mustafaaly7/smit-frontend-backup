import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Import profile icon
import { courseData } from "../components/data";
import Header from "../components/Header";
import Card from "../components/courseCard";

export default function Teacher() {
  return (
    <div>
      <Header />
      <h1 className="text-blue-800 font-bold text-4xl text-center mb-8">
        Teacher Courses Detail
      </h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mb-10 mx-auto">
          <Link to={"/teacher-profile"}>
            <div className="flex items-center justify-end mb-6">
              <div className="flex  space-x-3 items-end">
                <FaUserCircle className="text-3xl text-blue-800" />
                <span className="font-semibold text-xl">Teacher Profile</span>
              </div>
            </div>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {courseData.map((course, index) => (
              <Link to={`/student-list/${course.id}`} key={index}>
                <Card {...course} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
