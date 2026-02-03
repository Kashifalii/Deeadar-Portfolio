'use client';

import React from "react"

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      alert('Message sent successfully! I\'ll get back to you soon.');
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-foreground mb-12" />
          <p className="text-lg text-foreground/70 max-w-2xl mb-12">
            Have a project in mind or want to collaborate? I'd love to hear from you. Reach out
            and let's discuss how I can help scale your Amazon business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <motion.div
            className="p-6 rounded-lg border border-border hover:border-foreground/30 transition-colors"
            whileHover={{ y: -4 }}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Mail className="w-8 h-8 text-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
            <a
              href="mailto:deedar@example.com"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              deedar@example.com
            </a>
          </motion.div>

          <motion.div
            className="p-6 rounded-lg border border-border hover:border-foreground/30 transition-colors"
            whileHover={{ y: -4 }}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Phone className="w-8 h-8 text-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
            <a
              href="tel:+1234567890"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              +1 (234) 567-890
            </a>
          </motion.div>

          <motion.div
            className="p-6 rounded-lg border border-border hover:border-foreground/30 transition-colors"
            whileHover={{ y: -4 }}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <MapPin className="w-8 h-8 text-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Location</h3>
            <p className="text-foreground/70">Available Worldwide</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                  placeholder="your@email.com"
                />
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                placeholder="How can I help?"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:border-foreground transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-20 pt-12 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-foreground/60 text-sm">
              © 2024 Deedar Ali. All rights reserved.
            </p>
            <div className="flex gap-4 mt-6 md:mt-0">
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-foreground/60 hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={link.label}
                >
                  {link.icon === 'Linkedin' && <Mail size={20} />}
                  {link.icon === 'Twitter' && <Mail size={20} />}
                  {link.icon === 'Mail' && <Mail size={20} />}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
