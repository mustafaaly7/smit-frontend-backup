// src/components/AddStudentDialog.js
import React from "react";

export default function AddStudentDialog({ form, setForm, handleAddStudent, setShowDialog }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, picture: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddStudent();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-120 sm:w-144 max-w-4xl">
        <h2 className="text-xl font-bold mb-4 text-center">Add Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={form.fullName}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="batch"
                  placeholder="Batch"
                  value={form.batch}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject (Optional)"
                  value={form.subject}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <textarea
                  name="about"
                  placeholder="About the Student"
                  value={form.about}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  rows="4"
                ></textarea>
              </div>

              <div>
                <input
                  type="file"
                  name="picture"
                  onChange={handleImageChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={() => setShowDialog(false)}
              className="text-gray-500 px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
