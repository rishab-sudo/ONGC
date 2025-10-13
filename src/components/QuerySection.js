import React, { useState } from "react";
import "./QuerySection.css";

const QuerySection = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    mobile: "",
    className: "",
    year: "",
    category: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("sendMail.php", {
      method: "POST",
      body: new FormData(e.target),
    });
    if (response.ok) {
      alert("Form submitted successfully!");
      setFormData({
        studentName: "",
        parentName: "",
        email: "",
        mobile: "",
        className: "",
        year: "",
        category: "",
        consent: false,
      });
    } else {
      alert("Error sending form. Please try again.");
    }
  };

  return (
    <section className="admission-form-section">
      <div className="form-overlay">
        <h2 className="form-heading">Admission Enquiry Form</h2>

        <form className="admission-form" onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="form-row">
            <input
              type="text"
              name="studentName"
              placeholder="Student Name"
              value={formData.studentName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="parentName"
              placeholder="Parent Name"
              value={formData.parentName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Row 2 */}
          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Parent Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              pattern="[0-9]{10}"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          {/* Row 3 */}
          <div className="form-row">
            <select
              name="className"
              value={formData.className}
              onChange={handleChange}
              required
            >
              <option value="">Select Class</option>
              <option value="PG">PG</option>
              <option value="Nursery">Nursery</option>
              <option value="LKG">LKG</option>
              <option value="UKG">UKG</option>
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={`Class ${i + 1}`}>
                  Class {i + 1}
                </option>
              ))}
            </select>

            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            >
              <option value="">Select Academic Year</option>
              <option value="2025-2026">2025–2026</option>
              <option value="2026-2027">2026–2027</option>
            </select>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Day Scholar">Day Scholar</option>
              <option value="Hostel">Hostel</option>
              <option value="Transport">Transport</option>
            </select>
          </div>

          {/* Checkbox + Submit */}
          <div className="form-bottom">
            <label className="checkbox-label">
              <input
              className="checkbox"
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              I accept to reach me on Whatsapp / Call.
            </label>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuerySection;
