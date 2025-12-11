import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (phone && !/^[+0-9().\-\s]{7,}$/.test(phone)) {
      setError('Please enter a valid phone number or leave it blank.');
      return;
    }
    if (message.trim().length < 10) {
      setError('Message should be at least 10 characters so we can assist you better.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    fetch('https://formcarry.com/s/gi_M63IHP07', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          setIsSuccess(true);
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
        } else {
          setError(response.message || 'Something went wrong. Please try again.');
        }
      })
      .catch((error) => {
        setError(error.message ? error.message : 'Network error. Please retry.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  if (isSuccess) {
    return (
      <div className="text-center p-10 card-white rounded-2xl" role="status" aria-live="polite">
        <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-slate-800 mb-3">Message Sent!</h3>
        <p className="text-slate-600 mb-8 leading-relaxed">Thank you for reaching out. We'll respond to your inquiry shortly.</p>
        <button
          type="button"
          onClick={() => {
            setIsSuccess(false);
            setError('');
          }}
          className="btn-sky"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="card-white rounded-2xl p-8">
      <form onSubmit={onSubmit} className="space-y-5" aria-describedby={error ? 'form-error' : undefined}>
        {error && (
          <div id="form-error" className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-4 flex items-start gap-3" role="alert">
            <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span>{error}</span>
          </div>
        )}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-800">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-slate-900 transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-800">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-slate-900 transition-all"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-slate-800">Phone <span className="text-slate-500 font-normal">(optional)</span></label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(555) 555-5555"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-slate-900 transition-all"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-800">Your Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your care needs and how we can help..."
            rows="5"
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-slate-900 resize-none transition-all"
          ></textarea>
          <p className="mt-2 text-xs text-slate-500">Minimum 10 characters. For urgent inquiries, please mention "URGENT" at the start.</p>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-sky w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
