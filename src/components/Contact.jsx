import React, { useState } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (e.g., send to API or email service)
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
    Swal.fire({
        title : "Congratulations",
        text : "Message Sent",
        icon : "success",
    })
  };

  return (
    <section id="contact" className="w-11/12 mx-auto py-20">
      <h2 className="text-3xl md:text-4xl font-bold poppins text-indigo-600 mb-10 text-center">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side: Contact Info */}
        <div className="space-y-8 flex flex-col justify-center">
          <div className="flex items-center gap-4">
            <MdPhone size={28} className="text-indigo-600" />
            <div>
              <p className="poppins font-semibold text-gray-700">Phone</p>
              <p className="ibm text-gray-600">+880 1234 567890</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MdEmail size={28} className="text-indigo-600" />
            <div>
              <p className="poppins font-semibold text-gray-700">Email</p>
              <p className="ibm text-gray-600">plabon@example.com</p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 bg-gray-50 p-8 rounded-2xl shadow-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 poppins"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 poppins"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 poppins"
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold poppins py-3 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
