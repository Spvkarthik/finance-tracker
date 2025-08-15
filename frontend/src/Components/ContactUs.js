import React from 'react';
import contactImage from '../assets/contact-us.jpg'; 

const ContactUs = () => {
  return (
    <div className='body'>
    <div className="container my-5 " id="contact">
      <h1 className="text-center mb-4">Contact Us</h1>
      <br />
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={contactImage}
            alt="Contact Us"
            className="img-fluid w-75"
          />
        </div>
        <div className="col-md-6">
          <div className="">
            <p className="text-center mb-4">
              Have questions or suggestions? We'd love to hear from you!
            </p>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="subject" placeholder="Message subject" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" id="message" rows="4" placeholder="Write your message here..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
