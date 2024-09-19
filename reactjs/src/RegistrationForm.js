// src/RegistrationForm.js
import React, { useState } from 'react';

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
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        console.log('User registered successfully:', result);
      } else {
        console.log('Error:', result);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="text" name="kid_name" placeholder="Kid's Name" value={formData.kid_name} onChange={handleChange} required />
      <input type="text" name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} required />
      <input type="number" name="age" placeholder="Age (6-11)" value={formData.age} onChange={handleChange} required />
      <input type="date" name="dob" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} required />
      <input type="text" name="parent_name" placeholder="Parent's Name" value={formData.parent_name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Parent's Email" value={formData.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      <input type="tel" name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
