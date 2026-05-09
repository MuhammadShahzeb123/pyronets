'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Your Name <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 text-foreground placeholder:text-muted-foreground transition-all duration-300"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Email Address <span className="text-primary">*</span>
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 text-foreground placeholder:text-muted-foreground transition-all duration-300"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Company
        </label>
        <input
          type="text"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 text-foreground placeholder:text-muted-foreground transition-all duration-300"
          placeholder="Company Name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 text-foreground placeholder:text-muted-foreground transition-all duration-300 resize-none"
          placeholder="Tell us about your web scraping needs..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-6 py-3.5 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {status === 'sending' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>

      {status === 'success' && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
          <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-green-500 text-sm">Message sent! Check your email for our confirmation.</p>
        </div>
      )}
      {status === 'error' && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
          <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-red-500 text-sm">Failed to send. Please try again or email us directly at contactus@pyronets.com.</p>
        </div>
      )}
    </form>
  );
}
