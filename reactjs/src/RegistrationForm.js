/*// src/RegistrationForm.js
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
*/


import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="First Name" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            placeholder="Last Name" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="tel" 
            placeholder="Phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            placeholder="Address" 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            placeholder="City" 
            name="city" 
            value={formData.city} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            placeholder="State" 
            name="state" 
            value={formData.state} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            placeholder="Postal Code" 
            name="postalCode" 
            value={formData.postalCode} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
          <button type="submit" className="button register-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
