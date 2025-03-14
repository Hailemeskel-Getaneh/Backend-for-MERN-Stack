import React, { useState } from 'react';
// import HomeBackground from '../assets/images/homeBackground3.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Error sending message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message. Please try again later.');
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen text-white py-20 px-12 bg-cover bg-center"
      // style={{
      //   backgroundImage: `url(${HomeBackground})`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      // }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-6 text-center">
          Feel free to send me a message! I’ll get back to you as soon as I can.
        </p>
        
        {/* Contact Information */}
        <div className="text-center mb-10">
          <p className="text-xl">
            📧 <strong>Email:</strong> hailegetaneh1221@gmail.com
          </p>
          <p className="text-xl">
            📞 <strong>Phone:</strong> +251 956 319 463
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-white bg-slate-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-lg font-semibold">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-white bg-slate-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-lg font-semibold">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 mt-2 border border-white bg-slate-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-2xl hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
