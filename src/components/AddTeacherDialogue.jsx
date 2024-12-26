import React, { useState } from "react";

export default function AddTeacherDialog({ form, setForm, handleAddTeacher, setShowDialog }) {
  const [errors, setErrors] = useState({});

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

  const validateForm = () => {
    const newErrors = {};
    // Check all required fields
    if (!form.fullName) newErrors.fullName = "Full Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.batch) newErrors.batch = "Batch is required";
    if (!form.phone) newErrors.phone = "Phone Number is required";
    if (!form.gender) newErrors.gender = "Gender is required";
    if (!form.password) newErrors.password = "Password is required";
    if (!form.subject) newErrors.subject = "Subject is required";
    if (!form.about) newErrors.about = "About the Teacher is required";
    if (!form.picture) newErrors.picture = "Picture is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleAddTeacher();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-120 sm:w-144 max-w-4xl">
        <h2 className="text-xl font-bold mb-4 text-center">Add Teacher</h2>
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
                  required
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="batch"
                  placeholder="Batch"
                  value={form.batch}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {errors.batch && <p className="text-red-500 text-sm">{errors.batch}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
              </div>

              <div>
                <textarea
                  name="about"
                  placeholder="About the Teacher"
                  value={form.about}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  rows="4"
                ></textarea>
                {errors.about && <p className="text-red-500 text-sm">{errors.about}</p>}
              </div>

              <div>
                <input
                  type="file"
                  name="picture"
                  onChange={handleImageChange}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {errors.picture && <p className="text-red-500 text-sm">{errors.picture}</p>}
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
              Add Teacher
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
