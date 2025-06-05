// src/pages/HomePage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If any internal links are needed beyond navbar

const HomePage = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [outputMessage, setOutputMessage] = useState('');

  const handleMessageOutput = () => {
    if (userName && email) {
      // Basic email validation (can be more robust)
      if (!email.includes('@') || !email.includes('.')) {
        setOutputMessage("Please enter a valid email address.");
        return;
      }
      setOutputMessage(
        `Welcome to this website, ${userName}, we'll be sending an email verification through ${email}`
      );
    } else {
      setOutputMessage("Please enter both your name and email.");
    }
  };

  return (
    <>
      <div style={{textAlign: 'center'}}> {/* Original div styling */}
        <h1>JDMC Homepage</h1>
        <p>Welcome to JDM Crew, an old-school cars website by Ivan_.</p>
      </div>

      <header> {/* This header is specific to the homepage in the original structure */}
        {/* Navbar is now in Layout.jsx */}
        <br />
        <h3>Insert your name:</h3>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Your Name"
        />
        <br /><br />
        <h3>Email:</h3>
        <input
          type="email"
          id="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="blahblah@blah.com"
        />
        <button onClick={handleMessageOutput}>GO!</button>
        <h3 id="message">{outputMessage}</h3>
      </header>

      {/* Accordion using Bootstrap's data attributes */}
      <div className="accordion" id="faqAccordion">
        <div className="card">
          <div className="card-header" id="faq1">
            <h2 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-bs-toggle="collapse" // Use data-bs-toggle
                data-bs-target="#collapse1"
                aria-expanded="true"
                aria-controls="collapse1"
              >
                Q1: What is this website about?
              </button>
            </h2>
          </div>
          <div
            id="collapse1"
            className="collapse show"
            aria-labelledby="faq1"
            data-bs-parent="#faqAccordion" // Use data-bs-parent
          >
            <div className="card-body">
              Nowadays website by car is a old-school thang,so I wanna build a whole car website for people who want to share cars/ modifications/events....
            </div>
          </div>
        </div>
        {/* Add more accordion items if needed */}
      </div>

      <article>
        <h1><del>Post Whatever u wanna post</del></h1>
        <h1>Ahahah no way to put illegal news on this website (Forum page are not fully done yet.).</h1>
        <table>
          <tbody> {/* Added tbody for valid HTML structure */}
            <tr>
              <td>
                <Link to="/news"> {/* Use Link for internal navigation */}
                  <center><img src="/img/SwiftConcept.jpg" alt="SC" width="800" height="600" /></center>
                  <h2>The All new Swift Concept Released</h2>
                </Link>
              </td>
              <td>
                <Link to="/gallery"> {/* Use Link for internal navigation */}
                  <center><img src="/img/22B STI.jpg" alt="1" width="800" height="600" /></center>
                  <h2>Subaru 22B STI @Gallery page</h2>
                </Link>
              </td>
              {/* The original had <td colspan="3"></td> which seems like a placeholder or mistake */}
            </tr>
          </tbody>
        </table>
      </article>
    </>
  );
};

export default HomePage;