import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { StudentsData } from './coursedata/data'; // Ensure the path is correct
import BlueButton from '../components/button';

function Assignments  ()  {
  const { courseId } = useParams(); // Get course ID from route params

  // Assuming first student is logged in
  const loggedInStudent = StudentsData[0];

  // Use state to store assignments to trigger re-render when new ones are added
  const [assignments, setAssignments] = useState(loggedInStudent.assignments);

  const [demoLink, setDemoLink] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [title, setTitle] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newAssignment = {
      title,
      demoLink,
      githubLink,
      status: 'Submitted',
    };

    // Update the assignments state to include the new assignment
    setAssignments([...assignments, newAssignment]);

    alert('Assignment submitted successfully!');
    
    // Clear the form fields
    setDemoLink('');
    setGithubLink('');
    setTitle('');
  };

  // Toggle visibility of links for an assignment
  const [visibleLinks, setVisibleLinks] = useState({});

  const toggleLinkVisibility = (index, linkType) => {
    setVisibleLinks((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        [linkType]: !prev[index]?.[linkType],
      },
    }));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Assignments for Course {courseId}</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-blue-500 mb-4">Your Assignments</h2>

        {assignments.length > 0 ? (
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-100">
                <th className="border p-3">Title</th>
                <th className="border p-3">Status</th>
                <th className="border p-3">Teacher</th>
                <th className="border p-3">Demo Link</th>
                <th className="border p-3">GitHub Link</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment, index) => (
                <tr key={index} className="hover:bg-blue-50">
                  <td className="border p-3">{assignment.title}</td>
                  <td className="border p-3">{assignment.status}</td>
                  <td className="border p-3">{loggedInStudent.teacher}</td>
                  <td className="border p-3">
                    <button
                      onClick={() => toggleLinkVisibility(index, 'demoLink')}
                      className="text-blue-500"
                    >
                      {visibleLinks[index]?.demoLink ? 'Hide Demo Link' : 'Show Demo Link'}
                    </button>
                    {visibleLinks[index]?.demoLink && (
                      <p>
                        <a href={assignment.demoLink} target="_blank" rel="noopener noreferrer">
                          {assignment.demoLink}
                        </a>
                      </p>
                    )}
                  </td>
                  <td className="border p-3">
                    <button
                      onClick={() => toggleLinkVisibility(index, 'githubLink')}
                      className="text-blue-500"
                    >
                      {visibleLinks[index]?.githubLink ? 'Hide GitHub Link' : 'Show GitHub Link'}
                    </button>
                    {visibleLinks[index]?.githubLink && (
                      <p>
                        <a href={assignment.githubLink} target="_blank" rel="noopener noreferrer">
                          {assignment.githubLink}
                        </a>
                      </p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-blue-500">No assignments found.</p>
        )}
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-blue-500 mb-4">Submit Assignment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-3 border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Demo Link:</label>
            <input
              type="url"
              value={demoLink}
              onChange={(e) => setDemoLink(e.target.value)}
              className="p-3 border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              required
            />
          </div>
          <div>
            <label className="block mb-2">GitHub Link:</label>
            <input
              type="url"
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
              className="p-3 border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              required
            />
          </div>
          <BlueButton
            text={"Submit"}
            className={"w-full"}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Assignments;
