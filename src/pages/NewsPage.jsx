// src/pages/NewsPage.jsx
import React from 'react';

const NewsPage = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>JDMC News</h1>
        <p>Interesting car news hand picked by the author.</p>
      </div>
      {/* Header with only <br/> in original, Navbar handled by Layout */}
      <header><br /></header>

      <article>
        <h1>2024 Suzuki Swift Previewed With Concept Heading To Japan Mobility Show</h1>
        <center><img src="/img/SwiftConcept.jpg" alt="SC" width="1200" height="800" /></center>
        <br />
        <h2>The third-generation Suzuki Swift is already seven years old, having been unveiled in late 2016.</h2>
        <h2>That's about the average life cycle of a car, so it comes as no surprise the supermini is about to switch to the next-gen model.</h2>
        <h2>Before that happens, a concept car is being previewed today ahead of its full debut set for the end of the month at the Japan Mobility Show to be held at the Tokyo Big Sight exhibition center.</h2>
        <br />
        <h2>It may be officially labeled as a concept car but we're getting the impression it's extremely close to the subsequent production vehicle.</h2>
        <h2>It looks instantly familiar and yet there are many changes worth pointing out.</h2>
        <h2>For starters, the handles for the rear doors are no longer mounted up high next to the C-pillar as they've been moved to their regular spot. The profile shows a fixed glass in the rear doors that wasn't there before while the new prominent character line extends from front to rear. We're also noticing a "Hybrid" badge in the front fender along with a camera mounted at the bottom of the side mirrors.</h2>
        <h2>More information can found on <a href="https://www.carwow.co.uk/suzuki/news/7229/new-suzuki-swift-concept-revealed#gref" target="_blank" rel="noopener noreferrer">Here</a></h2>
        <br /><br /><br />
        <center>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YDsiJtlofxs?si=9LZ7HBLsMmJfNwKz" // Replace with actual valid YouTube embed URL if this is a placeholder
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </center>
      </article>
    </>
  );
};

export default NewsPage;