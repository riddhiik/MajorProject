// src/RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    kid_name: '',
    gender: '',
    age: '',
    dob: '',
    parent_name: '',
    email: '',
    password: '',
    phone_number: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000', formData);
      if (response.status === 201) {
        alert('Registration successful!');
      } else {
        alert('Failed to register');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="kid_name" placeholder="Kid's Name" value={formData.kid_name} onChange={handleChange} required />
      <input type="text" name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} required />
      <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
      <input type="date" name="dob" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} required />
      <input type="text" name="parent_name" placeholder="Parent's Name" value={formData.parent_name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      <input type="tel" name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
