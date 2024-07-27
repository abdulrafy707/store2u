'use client'
import { useState } from 'react';

const ResumeForm = ({ onChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    headline: '',
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    profile: '',
    education: '',
    experience: '',
    skills: '',
    activities: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    onChange({ ...formData, [name]: value });
  };

  return (
    <div className="w-1/2 p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Enter your information</h2>
      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Headline</label>
        <input
          type="text"
          name="headline"
          value={formData.headline}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">LinkedIn</label>
        <input
          type="text"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Profile</label>
        <textarea
          name="profile"
          value={formData.profile}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Education</label>
        <textarea
          name="education"
          value={formData.education}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Experience</label>
        <textarea
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Skills</label>
        <textarea
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Extracurricular Activities</label>
        <textarea
          name="activities"
          value={formData.activities}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
      </div>
    </div>
  );
};

export default ResumeForm;
