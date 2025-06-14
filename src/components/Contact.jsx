import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await emailjs.sendForm(
        'service_gk3zp49', // Replace with your EmailJS service ID
        'template_o6nnfmx', // Replace with your EmailJS template ID
        formRef.current,
        'Sv_Z8anFF87p-1N-Y' // Replace with your EmailJS public key
      );

      setSuccess(true);
      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setError('Failed to send message. Please try again.');
      console.error('Error:', error);
    }

    setLoading(false);
  };

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/Agen7Z', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/sangam-bakhunchhe-02484930a/', label: 'LinkedIn' },
    
    { icon: <Mail size={20} />, url: 'mailto:info.azrael169@gmail.com', label: 'Email' }
  ];

  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#7fdbca] to-[#82aaff] bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-[#8892b0] mb-8">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#01111b] p-6 rounded-lg border border-[#1e3a8a]"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-[#8892b0] mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#011627] border border-[#1e3a8a] rounded text-[#d6deeb] focus:outline-none focus:border-[#7fdbca]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-[#8892b0] mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#011627] border border-[#1e3a8a] rounded text-[#d6deeb] focus:outline-none focus:border-[#7fdbca]"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-[#8892b0] mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-[#011627] border border-[#1e3a8a] rounded text-[#d6deeb] focus:outline-none focus:border-[#7fdbca]"
                  placeholder="Your message"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-[#7fdbca] text-[#011627] rounded-md font-medium hover:bg-[#82aaff] transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
              {success && (
                <p className="text-green-500 text-center">Message sent successfully!</p>
              )}
              {error && (
                <p className="text-red-500 text-center">{error}</p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-[#01111b] p-6 rounded-lg border border-[#1e3a8a]">
              <h2 className="text-xl font-semibold text-[#d6deeb] mb-4">Contact Information</h2>
              <div className="space-y-4">
                <a
                  href="mailto:info.azrael2169@gmail.com"
                  className="flex items-center gap-3 text-[#8892b0] hover:text-[#7fdbca] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info.azrael2169@gmail.com</span>
                </a>
                <a
                  href="https://github.com/Agen7Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#8892b0] hover:text-[#7fdbca] transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sangam-bakhunchhe-02484930a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#8892b0] hover:text-[#7fdbca] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                
              </div>
            </div>

            <div className="bg-[#01111b] p-6 rounded-lg border border-[#1e3a8a]">
              <h2 className="text-xl font-semibold text-[#d6deeb] mb-4">Let's Connect</h2>
              <p className="text-[#8892b0]">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact; 