'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '9385092c-9479-4388-9725-8eade8d3092c',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New message from ${formData.name} - Sanika Portfolio`
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 pointer-events-none overflow-y-auto">
        <div 
          className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-[95vw] sm:max-w-md md:max-w-lg lg:max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto pointer-events-auto transform transition-all duration-300 scale-100 my-auto mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-start p-4 sm:p-5 md:p-6 lg:p-8 border-b border-gray-100 gap-2">
            <div className="flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-medium text-black mb-1 sm:mb-2">
                Let's <span className="italic">connect</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-poppins font-normal text-gray-600">
                I'd love to hear about your project
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 sm:p-2 flex-shrink-0"
              aria-label="Close modal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-4 sm:p-5 md:p-6 lg:p-8 space-y-4 sm:space-y-5 md:space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm sm:text-base md:text-lg font-poppins font-medium text-black mb-1.5 sm:mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl font-poppins text-sm sm:text-base md:text-lg focus:border-black focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm sm:text-base md:text-lg font-poppins font-medium text-black mb-1.5 sm:mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl font-poppins text-sm sm:text-base md:text-lg focus:border-black focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm sm:text-base md:text-lg font-poppins font-medium text-black mb-1.5 sm:mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl font-poppins text-sm sm:text-base md:text-lg focus:border-black focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border-2 border-green-500 rounded-lg sm:rounded-xl p-3 sm:p-4 flex items-start sm:items-center gap-2 sm:gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="text-green-700 font-poppins font-medium text-sm sm:text-base">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="bg-red-50 border-2 border-red-500 rounded-lg sm:rounded-xl p-3 sm:p-4 flex items-start sm:items-center gap-2 sm:gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0 mt-0.5 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <p className="text-red-700 font-poppins font-medium text-sm sm:text-base">
                  Something went wrong. Please try again.
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-black text-white rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-poppins font-medium hover:bg-gray-800 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

