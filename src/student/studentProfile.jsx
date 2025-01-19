import React, { useState, useEffect, useContext } from "react";
import { StudentsData } from "./coursedata/data"; // Ensure the path is correct
import Cookies from "js-cookie";
import { authContext } from "../context/userContext";
import avatar from "../../public/images/avatar.jpg"

function StudentProfile() {
const{user , setuser} = useContext(authContext)







useEffect(() => {
  
  
  
  
  console.log(("USER => ", user._id));

  

  }, [user]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
          {/* Profile Header */}
          <div className="flex items-center mb-8">
            <img
              src={avatar}
              alt="Student Avatar"
              className="w-24 h-24 rounded-full border-4 border-teal-500 mr-6"
            />
            <div>
              <h1 className="text-4xl font-semibold text-gray-800">
                {user.fullname}
              </h1>
              <p className="text-lg text-gray-600">
                Student ID: {user.std_id}
              </p>
              <p className="text-lg text-teal-500"> Age :{user.age}</p>
            </div>
          </div>

          {/* Bio Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Email</h2>
            <p className="text-lg text-gray-700">{user.email}</p>
          </div>

          {/* Courses Enrolled Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Enrolled Courses
            </h2>


            {/* //GONNA WORK ON COURSES LATER ON OTD 1-19-2025  */}

            {/* <ul className="space-y-4">
              {loggedInStudent.enrolledCourses.map((course, index) => (
                <li
                  key={index}
                  className="bg-teal-100 p-4 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold text-teal-700">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Instructor: {course.teacher}
                  </p>
                  <p className="text-sm text-gray-600">
                    Start Date: {course.startDate}
                  </p>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
    </div>
   
  );
}

export default StudentProfile;
