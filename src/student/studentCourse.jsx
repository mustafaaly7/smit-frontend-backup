import React, { useState, useEffect } from 'react';
import { CoursesData, StudentsData } from './coursedata/data'; // Ensure the path is correct
import { useNavigate } from 'react-router-dom';
import BlueButton from '../components/button';

const Courses = () => {
  const [modalCourse, setModalCourse] = useState(null); // For modal data
  const [viewDetailsModal, setViewDetailsModal] = useState(false); // Modal state
  const [sortBy, setSortBy] = useState('startDate'); // Sorting criteria
  const [searchTerm, setSearchTerm] = useState(''); // Search term
  const [loggedInStudent, setLoggedInStudent] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Set logged-in student (default to first student)
    if (StudentsData.length > 0) {
      setLoggedInStudent(StudentsData[0]); // Replace this with your actual logic
    }
  }, []);

  // Function to sort courses
  const sortCourses = (courses, sortBy) => {
    return courses.sort((a, b) => {
      if (sortBy === 'startDate') {
        return new Date(a.startDate) - new Date(b.startDate);
      } else if (sortBy === 'teacher') {
        return a.teacher.localeCompare(b.teacher);
      }
      return 0;
    });
  };

  // Filter courses based on search
  const filteredCourses = CoursesData.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Open modal to view course details
  const handleViewDetailsModalOpen = (course) => {
    setModalCourse(course);
    setViewDetailsModal(true);
  };

  // Close modal
  const handleModalClose = () => {
    setViewDetailsModal(false);
  };

  // Navigate to assignments page
  const handleAssignmentsRedirect = (courseId) => {
    navigate(`/assignments/${courseId}`);
  };

  if (!loggedInStudent) {
    // Return loading state or null until the student data is available
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-extrabold text-blue-500 mb-2">Welcome, {loggedInStudent.name}!</h1>
        <p className="text-lg text-blue-700">Your teacher is {loggedInStudent.teacher}.</p>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-blue-600">Courses</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Courses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 border border-blue-300 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
      </div>

      {/* Sorting Dropdown */}
      <div className="flex space-x-4 mb-6">
        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-white border border-blue-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="startDate">Sort by Start Date</option>
          <option value="teacher">Sort by Teacher</option>
        </select>
      </div>

      {/* Course List */}
      {sortCourses(filteredCourses, sortBy).map((course) => {
        // Check if the student is enrolled in the course
        const isEnrolled = loggedInStudent.enrolledCourses?.includes(course.id);

        return (
          <div key={course.id} className="bg-white p-5 rounded-lg shadow-md border border-blue-200 mb-4">
            <h2 className="text-2xl font-bold text-blue-500">{course.title}</h2>
            <p className="text-sm text-blue-700">Instructor: {course.teacher}</p>
            <p className="text-sm text-blue-700">Start Date: {course.startDate}</p>
            <p className="text-sm text-blue-700">Students Enrolled: {course.students}</p>
            {/* Display Enrolled message if student is enrolled */}
            <p className={`text-sm ${isEnrolled ? 'text-green-500' : 'text-red-500'}`}>{isEnrolled ? 'Enrolled' : 'Not Enrolled'}</p>
            <div className="mt-3">
              <div className="flex gap-4">
                <BlueButton
                  text={"View Detail"}
                  className={"gap-4"}
                  onClick={() => handleViewDetailsModalOpen(course)}
                />

                {/* Disable Assignments button if the student is not enrolled */}
                <BlueButton
                  text={"Assignments"}
                  className={"gap-4"}
                  onClick={() => isEnrolled && handleAssignmentsRedirect(course.id)}
                  disabled={!isEnrolled} // Disable if not enrolled
                />
              </div>
            </div>
          </div>
        );
      })}

      {/* Modal for Course Details */}
      {viewDetailsModal && modalCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md w-96 shadow-lg">
            <h3 className="font-bold text-xl text-blue-500">{modalCourse.title}</h3>
            <p>Instructor: {modalCourse.teacher}</p>
            <p>Category: {modalCourse.category}</p>
            <p>Syllabus: {modalCourse.syllabus}</p>
            <p>Start Date: {modalCourse.startDate}</p>
            <p>Students Enrolled: {modalCourse.students}</p>
            <button
              onClick={handleModalClose}
              className="bg-red-500 text-white px-4 py-2 rounded-md mt-3 hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
