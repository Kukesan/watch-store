import React, { useState } from "react";
import './message-container.css';

function MessageContainer() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple form validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all required fields.');
            return;
        }

        // Example: Send form data to a server (you may need to implement a server-side script)
        console.log('Name: ' + formData.name);
        console.log('Email: ' + formData.email);
        console.log('Message: ' + formData.message);

        try {
            // Example: Send form data to a server API
            const response = await fetch('http://localhost:8080/api/contacts', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
      
            if (response.ok) {
              // API request was successful
              console.log('Form data sent successfully');
            } else {
              // Handle error scenarios
              console.error('Failed to send form data to the API');
            }
          } catch (error) {
            console.error('Error sending form data:', error);
          }

        // Reset the form after submission (optional)
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="message-container">
            <div className="message-box">
                <p className="message-text">We are here to help you with any questions you may have</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        className="input-field"
                        value={formData.name}
                        onChange={handleChange}
                        required />
                    <input
                        type="email"
                        id='email'
                        placeholder="Your Email"
                        className="input-field"
                        value={formData.email}
                        onChange={handleChange}
                        required />
                    <textarea
                        id='message'
                        placeholder="Your Message"
                        className="input-field"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button className="send-button">Send Message</button>
                </form>
            </div>
            <div className="contact-details">
                <div className="detail-row">
                    <div className="detail">
                        <p className="detail-head">Phone</p>
                        <p className="detail-about">123-456-7890</p>
                    </div>
                    <div className="detail">
                        <p className="detail-head">Email</p>
                        <p className="detail-about">test@gmail.com</p>
                    </div>
                </div>
                <div className="contact-img-card">
                    <img className="contact-img" src="https://t3.ftcdn.net/jpg/06/08/82/50/360_F_608825085_MuQopoWCJQJ8BUa4u2z1DECXtkuoVLmj.jpg" />
                </div>
            </div>
        </div>
    );
}

export default MessageContainer;