import React, { useState } from 'react';

export default function Contacts() {
  // Form input fields state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State for field-specific errors and top success message
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Clear individual field errors as the user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Validation function checks for missing or invalid inputs
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg(false);

    const validationErrors = validate();

    // If there are errors, attach them to state and stop submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate successful form submission
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMsg(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }, 800);
  };

  return (
    <section id="contacts" className="py-12 px-4 sm:px-6 max-w-3xl mx-auto">
      {/* Title & Email Subheading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-zinc-900">Contact Me</h2>
        <p className="text-zinc-600 text-sm mt-1">
          Direct email: <a href="mailto:mikhaildustin@gmail.com" className="text-indigo-600 font-medium hover:underline">mikhaildustin@gmail.com</a>
        </p>
      </div>

      {/* Main Form Container */}
      <div className="bg-zinc-100 border border-zinc-300 rounded-2xl p-6 sm:p-8 shadow-md relative">

        {/* TOP SUCCESS NOTIFICATION (Shows above form upon valid submit) */}
        {successMsg && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-800 text-sm font-medium flex items-center gap-2">
            <span>✅</span>
            <span>Thank you! Your message has been sent successfully. I'll get back to you soon!</span>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          
          {/* NAME FIELD */}
          <div>
            <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1">
              Your Name <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className={`w-full px-4 py-2.5 rounded-lg bg-white border text-zinc-900 text-sm focus:outline-none transition-colors ${
                errors.name 
                  ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500' 
                  : 'border-zinc-300 focus:border-indigo-600'
              }`}
            />
            {/* Below-input error message */}
            {errors.name && (
              <p className="text-xs text-red-600 font-medium mt-1.5 flex items-center gap-1">
                ⚠️ {errors.name}
              </p>
            )}
          </div>

          {/* EMAIL FIELD */}
          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1">
              Email Address <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. john@example.com"
              className={`w-full px-4 py-2.5 rounded-lg bg-white border text-zinc-900 text-sm focus:outline-none transition-colors ${
                errors.email 
                  ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500' 
                  : 'border-zinc-300 focus:border-indigo-600'
              }`}
            />
            {/* Below-input error message */}
            {errors.email && (
              <p className="text-xs text-red-600 font-medium mt-1.5 flex items-center gap-1">
                ⚠️ {errors.email}
              </p>
            )}
          </div>

          {/* MESSAGE FIELD */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1">
              Message <span className="text-red-500 font-bold">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className={`w-full px-4 py-2.5 rounded-lg bg-white border text-zinc-900 text-sm focus:outline-none transition-colors ${
                errors.message 
                  ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500' 
                  : 'border-zinc-300 focus:border-indigo-600'
              }`}
            ></textarea>
            {/* Below-input error message */}
            {errors.message && (
              <p className="text-xs text-red-600 font-medium mt-1.5 flex items-center gap-1">
                ⚠️ {errors.message}
              </p>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 bg-zinc-900 hover:bg-zinc-800 text-white font-medium rounded-lg text-sm shadow transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* BACK TO TOP BUTTON */}
      <div className="mt-12 text-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-200 hover:bg-zinc-300 text-zinc-700 text-xs font-semibold rounded-full border border-zinc-300 shadow-sm transition-all hover:scale-105 active:scale-95"
        >
          <span>Back to top</span>
          <span>↑</span>
        </button>
      </div>
      
    </section>
  );
}