// src/pages/ForumPage.jsx
import React, { useState } from 'react';

const ForumPage = () => {
  const [username, setUsername] = useState('');
  const [messageText, setMessageText] = useState(''); // Renamed from 'message' to avoid conflict
  const [messages, setMessages] = useState([]);

  const handlePostMessage = () => {
    if (username && messageText) {
      setMessages([...messages, { username, text: messageText }]);
      setUsername('');
      setMessageText('');
      alert("POSTED!!!!!");
    } else {
      alert("Please enter username and message.");
    }
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>JDMC Forum</h1>
        <p>You can have some chit chat for now, img upload will update later.</p>
      </div>
      <header><br /></header> {/* Navbar handled by Layout */}

      <div id="forum"> {/* Styles for #forum, .message will come from Fstyle.css content in main.css */}
        <div id="messageList">
          {messages.map((msg, index) => (
            <div key={index} className="message"> {/* Ensure .message styles are in main.css */}
              <strong>{msg.username}:</strong> {msg.text}
            </div>
          ))}
        </div>

        <form id="postForm" onSubmit={(e) => e.preventDefault()}> {/* Prevent default form submission */}
          <label htmlFor="usernameForum">Username:</label> {/* Use htmlFor */}
          <input
            type="text"
            id="usernameForum" // Changed id to avoid conflict if 'username' is used elsewhere
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="messageForum">Message:</label> {/* Use htmlFor */}
          <textarea
            id="messageForum" // Changed id
            rows="4"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            required
          ></textarea>
          <button type="button" id="Btn" onClick={handlePostMessage}>Post!</button>
        </form>
      </div>
      <br /><br /><br />
      <iframe
        style={{ borderRadius: '12px', display: 'block', margin: '0 auto' }} // Center the iframe
        src="https://open.spotify.com/embed/playlist/6apkMbHsQf6Dp2l7KzBTyo?utm_source=generator&theme=0" // Replace with actual valid Spotify embed URL if this is a placeholder
        width="80%" // Make it responsive
        height="152"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </>
  );
};

export default ForumPage;