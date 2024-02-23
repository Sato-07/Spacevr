import React from 'react';
import { ValidationError, useForm } from '@formspree/react';

const ContactSection = () => {
  const [state, handleSubmit] = useForm('xeqykoqw');

  return (
    <div className='h-full'>
      <div className="p-8 h-full text-white relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-opacity-50 w-full ">
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Contact me</h2>

        {state.succeeded ? (
          <p className="text-gray-900 text-center">Thanks for your message!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="font-medium mt-8  block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <label htmlFor="email" className="font-medium block mb-1 mt-8">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message" className="font-medium  block mb-1 mt-8">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              errors={state.errors}
            />
            <button
              disabled={state.submitting}
              className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactSection;
