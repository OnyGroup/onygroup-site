'use client';

import React, { useState } from 'react';

export default function LarkForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);
  const [debugInfo, setDebugInfo] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setDebugInfo(null);
    
    try {
      // Send form data to our Next.js API route proxy
      const response = await fetch('/api/lark-submit-ocg-contact-page', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // Check if response is OK (status in the range 200-299)
      if (!response.ok) {
        // Get the text content for debugging
        const responseText = await response.text();
        setDebugInfo(`Status: ${response.status}, Response Text: ${responseText.substring(0, 500)}...`);
        throw new Error(`Server responded with status: ${response.status}`);
      }
      
      try {
        const result = await response.json();
        
        if (result.success) {
          setSubmitStatus({ success: true, message: 'Form submitted successfully!' });
          // Reset form after successful submission
          setFormData({ name: '', address: '', phoneNumber: '' });
        } else {
          throw new Error(result.message || 'Failed to submit form');
        }
      } catch (jsonError) {
        throw new Error(`Failed to parse JSON response: ${jsonError}`);
      }
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ success: false, message: `Failed to submit form: ${error.message}` });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Contact Information</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        
        <div className="mb-6">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 rounded-md text-white font-medium ${
            isSubmitting ? 'bg-blue-300' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        
        {submitStatus && (
          <div className={`mt-4 p-3 rounded-md ${
            submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {submitStatus.message}
          </div>
        )}
        
        {debugInfo && (
          <div className="mt-4 p-3 bg-yellow-100 text-yellow-800 rounded-md overflow-auto text-xs">
            <strong>Debug Info:</strong>
            <pre>{debugInfo}</pre>
          </div>
        )}
      </form>
    </div>
  );
}