// src/components/StudentDetailsSidebar.js
import React, { useEffect, useState } from 'react';

export default function StudentDetailsSidebar({ student, onClose, isOpen }) {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50 transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div
        className={`bg-white w-96 p-6 overflow-y-auto shadow-xl transform transition-transform duration-300 ease-in-out ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          onClick={onClose}
          className="text-red-500 font-bold text-lg absolute top-4 right-4"
        >
          X
        </button>

        <div className="flex flex-col items-center mb-6">
          {/* Student Picture */}
          {student.picture ? (
            <img
              src={student.picture}
              alt="Student"
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
          ) : (
            <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 flex justify-center items-center">
              <span className="text-gray-600 text-xl">No Image</span>
            </div>
          )}

          <h2 className="text-2xl font-semibold mb-4">Student Details</h2>
        </div>

        <div className="space-y-4">
          {/* Student Details */}
          <div className="flex flex-col">
            <label className="font-medium">Full Name:</label>
            <p>{student.fullName}</p>
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Email:</label>
            <p>{student.email}</p>
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Batch:</label>
            <p>{student.batch}</p>
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Gender:</label>
            <p>{student.gender}</p>
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Phone:</label>
            <p>{student.phone}</p>
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Subject:</label>
            <p>{student.subject}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
