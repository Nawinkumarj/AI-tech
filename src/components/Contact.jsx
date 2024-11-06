import React, { useState } from 'react';
import { FaPaperclip, FaHeart } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    projectDetails: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileAttach = (e) => {
    console.log(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  };
  const [isSent, setIsSent] = useState(false);

  const handleClick = () => {
    setIsSent(true);
  };

  return (
    <div className="container-fluid contact min-vh-100 d-flex flex-column align-items-center justify-content-center text-white p-4 mt-5">
      <div className="col-lg-6 col-md-8 col-sm-10">
        <h1 className="text-left my-5">
          Hello! <br />
          We are happy to see you on this page. Please tell us what project you want to do with us?
        </h1>
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          <div className="form row mb-3">
            <div className="col-md-6 mb-3 contact-field">
              <label htmlFor="name">Your name:</label>
              <input
                type="text"
                className="form-control bg-dark text-white border-secondary"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3 contact-field">
              <label htmlFor="phone">Phone:</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text text-white">🇮🇳 +91</span>
                </div>
                <input
                  type="tel"
                  className="form-control bg-dark text-white"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="123 4567 890"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form row mb-3 contact-field">
            <div className="col-md-6 mb-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control text-white"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3 contact-field">
              <label htmlFor="location">Country/City:</label>
              <input
                type="text"
                className="form-control text-white"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group mb-3 contact-field">
            <label htmlFor="projectDetails">Project details:</label>
            <textarea
              className="form-control text-white"
              id="projectDetails"
              name="projectDetails"
              rows="4"
              value={formData.projectDetails}
              onChange={handleInputChange}
            />
          </div>
          <div className="d-flex align-items-center justify-content-center">
      <button
        type="button"
        className="contact-btn btn btn-sm"
        onClick={handleClick}
      >
        {isSent ? 'Sent' : 'Send request'}
      </button>
    </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
