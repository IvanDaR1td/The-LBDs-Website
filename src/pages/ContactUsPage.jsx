// src/pages/ContactUsPage.jsx
import React, { useState } from 'react';

const ContactUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [story, setStory] = useState(''); // For the textarea

  const validateForm = () => {
    if (name.trim() === "" || email.trim() === "") {
      alert("Name and email are required");
      return false;
    }
    // Simple email validation regex
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address!");
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to a backend server
      alert(`Thank you, ${name}! Your message has been received (this is a demo).\nEmail: ${email}\nSuggestion: ${story}`);
      // Clear form
      setName('');
      setEmail('');
      setStory('');
    }
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Contact Us (Or me)</h1>
      </div>
      <header><br /></header> {/* Navbar handled by Layout */}

      <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
      <center>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nameContact">Name:</label> {/* Use htmlFor */}
          <input
            type="text"
            id="nameContact" // Unique ID
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Suzi Wu"
          /><br /><br />

          <label htmlFor="emailContact">Email:</label> {/* Use htmlFor */}
          <input
            type="text" // Consider type="email" for better browser validation
            id="emailContact" // Unique ID
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="blahblah@blah.com"
          /><br /><br />

          <label htmlFor="storyContact">Any suggestions?</label><br /><br />
          <textarea
            id="storyContact" // Unique ID
            name="story"
            rows="5"
            cols="33" // Consider using CSS for sizing
            value={story}
            onChange={(e) => setStory(e.target.value)}
          ></textarea><br /><br /> {/* Added line break */}
          <center><input type="submit" value="Submit" /></center>
        </form>
      </center>
    </>
  );
};

export default ContactUsPage;