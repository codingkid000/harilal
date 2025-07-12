import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import resumeData from '../data/resumeData';
import emailjs from '@emailjs/browser'; // 👈 Add this import

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ✅ Replace with your real values
    const serviceID = 'service_8v2gfnk';
    const templateID = 'template_8l2jj4u'; // 🔁 Replace with your template ID
    const publicKey = 'Bo1aFSsESOQ6n812L'; // 🔁 Replace with your EmailJS public key

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error('EmailJS error:', error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to discuss job opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Panel */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-primary-700 mb-6">Contact Information</h3>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <Phone size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <a
                      href={`tel:${resumeData.personalInfo.phone}`}
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {resumeData.personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <Mail size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <a
                      href={`mailto:${resumeData.personalInfo.email}`}
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {resumeData.personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <MapPin size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Location</h4>
                    <p className="text-gray-600">{resumeData.personalInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-primary-700 mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a
                    href={resumeData.personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
                    aria-label="GitHub"
                  >
                    {/* GitHub Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a
                    href={resumeData.personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    {/* LinkedIn Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-primary-700 mb-6">Send Me a Message</h3>

              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-md animate-fade-in">
                  <p className="font-medium">Message sent successfully!</p>
                  <p>Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-full flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
