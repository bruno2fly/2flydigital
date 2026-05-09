'use client';

import Image from 'next/image';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  poolSize: string;
  fenceType: string;
  message: string;
}

export default function PoolFenceLandingClient() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    poolSize: '',
    fenceType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // API call would go here
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        poolSize: '',
        fenceType: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-[300px] md:min-h-[520px] relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/images/pool-fence-hero.jpg"
          alt="Pool Fence"
          fill
          priority
          className="object-cover"
        />

        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 py-12 md:px-6 md:py-16 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Premium Pool Fencing Solutions
          </h1>
          <p className="text-base md:text-lg text-blue-100 mb-8 max-w-2xl">
            Secure, stylish, and durable fencing for your pool. Get a free quote today!
          </p>
          <a
            href="#quote-form"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get Free Quote
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Our Pool Fencing?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="aspect-video relative mb-4 rounded-lg overflow-hidden bg-gray-200">
                <Image
                  src="/images/feature-1.jpg"
                  alt="Safety First"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                Safety First
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Meets all local safety codes and regulations for peace of mind
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="aspect-video relative mb-4 rounded-lg overflow-hidden bg-gray-200">
                <Image
                  src="/images/feature-2.jpg"
                  alt="Durable Materials"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                Durable Materials
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Built to last with premium materials resistant to weather and UV
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="aspect-video relative mb-4 rounded-lg overflow-hidden bg-gray-200">
                <Image
                  src="/images/feature-3.jpg"
                  alt="Professional Installation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                Professional Installation
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Expert installation by licensed professionals with years of experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fence Types Section */}
      <section className="px-4 py-12 md:px-6 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Fence Types
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {['Aluminum', 'Vinyl', 'Mesh', 'Wrought Iron'].map((type) => (
              <div
                key={type}
                className="bg-white rounded-lg p-6 text-center border-2 border-gray-200 hover:border-blue-500 transition-colors"
              >
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                  {type}
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Premium {type.toLowerCase()} fencing options
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg border-2 border-gray-200 p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Get Your Free Quote
            </h2>
            <p className="text-base text-gray-600 mb-8">
              Fill out the form below and our team will contact you with a customized quote
            </p>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm md:text-base text-green-800 font-semibold">
                  ✓ Thank you! We'll contact you soon with your quote.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="(123) 456-7890"
                />
              </div>

              {/* Address Field */}
              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-900 mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="123 Main St"
                />
              </div>

              {/* Pool Size Field */}
              <div>
                <label htmlFor="poolSize" className="block text-sm font-semibold text-gray-900 mb-2">
                  Pool Size
                </label>
                <select
                  id="poolSize"
                  name="poolSize"
                  value={formData.poolSize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Select pool size</option>
                  <option value="small">Small (15x30 or less)</option>
                  <option value="medium">Medium (15x30 to 20x40)</option>
                  <option value="large">Large (20x40 or more)</option>
                </select>
              </div>

              {/* Fence Type Field */}
              <div>
                <label htmlFor="fenceType" className="block text-sm font-semibold text-gray-900 mb-2">
                  Preferred Fence Type
                </label>
                <select
                  id="fenceType"
                  name="fenceType"
                  value={formData.fenceType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Select fence type</option>
                  <option value="aluminum">Aluminum</option>
                  <option value="vinyl">Vinyl</option>
                  <option value="mesh">Mesh</option>
                  <option value="wrought-iron">Wrought Iron</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors text-base"
              >
                {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 md:px-6 md:py-16 lg:py-20 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Secure Your Pool?
          </h2>
          <p className="text-base md:text-lg mb-8 text-blue-100">
            Contact us today for a free consultation and quote on your pool fencing project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-block"
            >
              Call Now
            </a>
            <a
              href="#quote-form"
              className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors inline-block border-2 border-white"
            >
              Request Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
