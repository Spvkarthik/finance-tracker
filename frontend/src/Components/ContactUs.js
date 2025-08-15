import React from 'react';
import contactImage from '../Assets/contact-us.jpg';

export default function ContactUs() {
  return (
    <div className="contact-body">
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <div className="contact-content">
          <div className="contact-image">
            <img src={contactImage} alt="Contact Us" />
          </div>
          <div className="contact-form">
            <p>Have questions or suggestions? We'd love to hear from you!</p>
            <form>
              <input type="text" placeholder="Enter your full name" required />
              <input type="email" placeholder="name@example.com" required />
              <input type="text" placeholder="Message subject" />
              <textarea rows="4" placeholder="Write your message here..." required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        html, body {
          margin: 0;
          padding: 0;
        }
        .contact-body {
          width: 100vw;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          box-sizing: border-box;
        }
        .contact-container {
          width: 100%;
          max-width: 1200px;
          padding: 80px 20px;
          box-sizing: border-box;
        }
        .contact-title {
          text-align: center;
          margin-bottom: 50px;
          font-size: 2.5rem;
        }
        .contact-content {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: center;
          align-items: center;
        }
        .contact-image {
          flex: 1 1 300px;
          display: flex;
          justify-content: center;
        }
        .contact-image img {
          max-width: 100%;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        .contact-form {
          flex: 1 1 300px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .contact-form p {
          text-align: center;
          margin-bottom: 15px;
        }
        .contact-form input,
        .contact-form textarea {
          padding: 12px;
          border-radius: 5px;
          border: 1px solid #ccc;
          width: 100%;
          font-size: 1rem;
          box-sizing: border-box;
        }
        .contact-form textarea {
          resize: none;
        }
        .contact-form button {
          padding: 12px;
          border-radius: 8px;
          font-weight: bold;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .contact-form button:hover {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .contact-content {
            flex-direction: column;
          }
          .contact-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
