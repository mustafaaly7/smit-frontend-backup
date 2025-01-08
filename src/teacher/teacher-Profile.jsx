import React from "react";

const TeacherProfile = () => {
  const teacherData = {
    name: "Bilal Attari",
    email: "bilalattari@example.com",
    specialization: "Web Development",
    experience: "10 Years",
    contact: "+123 456 7890",
    courses: [
      "Web And Mobile Application Developing",
      "Digital Marketing",
      "UI/Ux",
    ],
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU", // Replace with actual image URL
  };

  const activityData = [
    { id: 1, task: "Review React Assignment", deadline: "15th Dec 2024" },
    { id: 2, task: "Prepare Node.js Workshop", deadline: "20th Dec 2024" },
    { id: 3, task: "Evaluate JavaScript Quiz", deadline: "22nd Dec 2024" },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-10">
        {/* Profile Header */}
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Picture */}
            <img
              src={teacherData.profilePicture}
              alt={`${teacherData.name}'s Profile`}
              className="w-32 h-32 rounded-full object-cover shadow-md mb-4 md:mb-0"
            />

            {/* Teacher Details */}
            <div>
              <h1 className="text-3xl font-bold text-blue-800">
                {teacherData.name}
              </h1>
              <p className="text-lg text-gray-700 mt-2">
                <strong>Specialization:</strong> {teacherData.specialization}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Experience:</strong> {teacherData.experience}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Email:</strong> {teacherData.email}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Contact:</strong> {teacherData.contact}
              </p>
            </div>
          </div>
        </div>

        {/* Assigned Courses */}
        <div className="max-w-5xl mx-auto mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-blue-800">Courses Assigned</h2>
          <ul className="mt-4 list-disc pl-5">
            {teacherData.courses.map((course, index) => (
              <li key={index} className="text-black font-bold text-xl">
                {course}
              </li>
            ))}
          </ul>
        </div>

        {/* Teacher Activities */}
        <div className="max-w-5xl mx-auto mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-blue-800">
            Teacher Activities
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-800 text-white">
                  <th className="px-6 py-3 text-center border border-gray-300">
                    ID
                  </th>
                  <th className="px-6 py-3 text-center border border-gray-300">
                    Task
                  </th>
                  <th className="px-6 py-3 text-center border border-gray-300">
                    Deadline
                  </th>
                </tr>
              </thead>
              <tbody>
                {activityData.map((activity) => (
                  <tr key={activity.id} className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-center border border-gray-300">
                      {activity.id}
                    </td>
                    <td className="px-6 py-4 text-center border border-gray-300">
                      {activity.task}
                    </td>
                    <td className="px-6 py-4 text-center border border-gray-300">
                      {activity.deadline}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherProfile;
