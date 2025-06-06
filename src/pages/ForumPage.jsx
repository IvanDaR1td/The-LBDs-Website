import React, { useState } from 'react';

const ForumPage = () => {
  const [username, setUsername] = useState('');
  const [messageText, setMessageText] = useState('');
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

      <div id="forum">
        <div id="messageList">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              <strong>{msg.username}:</strong> {msg.text}
            </div>
          ))}
        </div>

        <form id="postForm" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="usernameForum">Username:</label>
          <input
            type="text"
            id="usernameForum"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="messageForum">Message:</label>
          <textarea
            id="messageForum"
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
        title="Spotify Playlist"
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/3PJnL0qaMd3C71Am5X8wjM?utm_source=generator" 
        width="100%" 
        height="152" 
        frameBorder="0" 
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
      ></iframe>
    </>
  );
};

export default ForumPage;
