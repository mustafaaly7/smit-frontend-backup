import { courseData, studentsData } from "../components/data";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useState } from "react";

const StudentList = () => {
  const { id } = useParams();
  const course = courseData.find((course) => course.id === parseInt(id));
  const courseName = course ? course.courseName : "Course Not Found";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [assignments, setAssignments] = useState([]);
  const [assignmentData, setAssignmentData] = useState({
    courseName: courseName,
    batchName: "",
    deadline: "",
    assignment: "",
    timePeriod: "",
  });

  const handleInputChange = (e) => {
    setAssignmentData({ ...assignmentData, [e.target.name]: e.target.value });
  };

  const handleModalClose = () => setIsModalOpen(false);
  const handleModalOpen = () => setIsModalOpen(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAssignments((prev) => [...prev, assignmentData]);
    setAssignmentData({
      courseName: courseName,
      batchName: "",
      deadline: "",
      assignment: "",
      timePeriod: "",
    });
    handleModalClose();
  };

  return (
    <div>
      <Header />

      <h1 className="text-blue-800 font-bold text-3xl md:text-4xl mx-4 md:mx-16 mt-5">
        Student Details
      </h1>

      <h2 className="text-lg md:text-2xl text-black-800 mx-4 md:mx-16 mt-2 font-bold flex items-center">
        Course Name: {courseName}
        <button
          className="ml-4 text-blue-800 hover:text-blue-600"
          onClick={handleModalOpen}
        >
          📄 Add Assignment
        </button>
      </h2>

      <div className="overflow-x-auto mx-4 md:mx-16 mt-8 mb-8">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-800 text-white">
              <th className="px-4 py-2 md:px-6 md:py-3 text-center border border-gray-300">
                Student Name
              </th>
              <th className="px-4 py-2 md:px-6 md:py-3 text-center border border-gray-300">
                Email
              </th>
              <th className="px-4 py-2 md:px-6 md:py-3 text-center border border-gray-300">
                Total Assignments
              </th>
              <th className="px-4 py-2 md:px-6 md:py-3 text-center border border-gray-300">
                Assignments Submitted
              </th>
              <th className="px-4 py-2 md:px-6 md:py-3 text-center border border-gray-300">
                Assignments Remaining
              </th>
              <th className="px-4 py-2 md:px-6 md:py-3 text-center border border-gray-300">
                Result
              </th>
            </tr>
          </thead>
          <tbody>
            {studentsData.map((student, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300 text-center">
                  {student.name}
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300 text-center">
                  {student.email}
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300 text-center">
                  {student.totalAssignments}
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300 text-center">
                  {student.assignmentsSubmitted}
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300 text-center">
                  {student.assignmentsRemaining}
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300 text-center">
                  {student.result}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {assignments.length > 0 && (
        <div className="mx-4 md:mx-16 mt-8 mb-10 overflow-x-auto">
          <h3 className="text-lg md:text-2xl font-bold mb-4">Assignments</h3>
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="px-4 py-2 md:px-6 md:py-3 border border-gray-300">
                  Course Name
                </th>
                <th className="px-4 py-2 md:px-6 md:py-3 border border-gray-300">
                  Batch Name
                </th>
                <th className="px-4 py-2 md:px-6 md:py-3 border border-gray-300">
                  Deadline
                </th>
                <th className="px-4 py-2 md:px-6 md:py-3 border border-gray-300">
                  Assignment
                </th>
                <th className="px-4 py-2 md:px-6 md:py-3 border border-gray-300">
                  Time Period
                </th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300">
                    {assignment.courseName}
                  </td>
                  <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300">
                    {assignment.batchName}
                  </td>
                  <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300">
                    {assignment.deadline}
                  </td>
                  <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300">
                    {assignment.assignment}
                  </td>
                  <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300">
                    {assignment.timePeriod}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-11/12 md:w-1/2">
            <h3 className="text-lg md:text-2xl font-bold mb-4">
              Add Assignment
            </h3>
            <form onSubmit={handleSubmit}>
              {/* Modal Form Fields */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Batch Name:
                </label>
                <input
                  type="text"
                  name="batchName"
                  value={assignmentData.batchName}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Deadline:
                </label>
                <input
                  type="date"
                  name="deadline"
                  value={assignmentData.deadline}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Assignment Details:
                </label>
                <textarea
                  name="assignment"
                  value={assignmentData.assignment}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Time Period:
                </label>
                <input
                  type="text"
                  name="timePeriod"
                  value={assignmentData.timePeriod}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              {/* Modal Footer */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="bg-gray-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  Add Assignment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentList;
