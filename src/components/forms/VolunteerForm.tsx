"use client";

import { useState } from 'react';

export function VolunteerForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    // Placeholder API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 p-8 rounded-2xl text-center border border-green-100">
        <h3 className="text-xl font-bold text-green-900 mb-2">Application Received</h3>
        <p className="text-green-800">
          Thank you for your interest in volunteering! Our volunteer coordinator will contact you shortly regarding orientation and screening.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
            First name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="first-name"
              id="first-name"
              required
              className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
            Last name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="last-name"
              id="last-name"
              required
              className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            required
            className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
          Phone number
        </label>
        <div className="mt-2">
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="block text-sm font-medium leading-6 text-gray-900">
          Area of Interest
        </label>
        <div className="mt-2">
          <select
            id="interest"
            name="interest"
            required
            className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          >
            <option value="">Select an area</option>
            <option value="outreach">Outreach Support</option>
            <option value="mentorship">Mentorship</option>
            <option value="teaching">Teaching / Tutoring</option>
            <option value="events">Event Support</option>
            <option value="fundraising">Fundraising</option>
            <option value="professional">Professional Services</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="availability" className="block text-sm font-medium leading-6 text-gray-900">
          Availability
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="availability"
            id="availability"
            placeholder="e.g., Weekends, Tuesday mornings"
            required
            className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
          Tell us why you want to volunteer
        </label>
        <div className="mt-2">
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="bg-yellow-50 p-4 rounded-md border border-yellow-100">
        <p className="text-sm text-yellow-800">
          <strong>Safety Note:</strong> For the protection of the children and vulnerable adults we serve, all volunteer positions require background screening, reference checks, and mandatory safeguarding orientation before beginning any work.
        </p>
      </div>

      <div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full rounded-md bg-primary px-3.5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 transition-colors"
        >
          {status === 'loading' ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
    </form>
  );
}
