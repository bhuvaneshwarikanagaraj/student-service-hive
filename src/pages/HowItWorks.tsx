
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Search, CheckCircle, CreditCard, MessageCircle, Star } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Browse Services",
    description: "Explore a wide range of services offered by talented students across various categories.",
    icon: <Search className="h-8 w-8 text-white" />,
    details: "Search by category, skill, or specific keywords to find exactly what you're looking for."
  },
  {
    id: 2,
    title: "Contact Provider",
    description: "Discuss your requirements directly with the student provider to ensure they can meet your needs.",
    icon: <MessageCircle className="h-8 w-8 text-white" />,
    details: "Ask questions, share specific requirements, and get a customized offer before placing an order."
  },
  {
    id: 3,
    title: "Place an Order",
    description: "Choose a service that matches your needs and place your order securely through our platform.",
    icon: <CreditCard className="h-8 w-8 text-white" />,
    details: "Our secure payment system holds your payment until you're satisfied with the delivered work."
  },
  {
    id: 4,
    title: "Receive & Review",
    description: "Get your work delivered on time, review it, and request revisions if needed before final approval.",
    icon: <CheckCircle className="h-8 w-8 text-white" />,
    details: "You can request revisions if something doesn't meet your expectations. Once satisfied, release payment and leave a review."
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-indigo-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            How StudServe Works
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            A simple and secure way to connect with talented student service providers
          </p>
        </div>
      </div>
      
      {/* Steps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden absolute top-24 w-full h-0.5 bg-gray-200 lg:block" aria-hidden="true"></div>
            
            {/* Steps */}
            <div className="grid gap-12 lg:grid-cols-4">
              {steps.map((step) => (
                <div key={step.id} className="relative">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 mb-5">
                      {step.icon}
                    </div>
                    <h3 className="mt-2 text-lg font-medium text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-base text-gray-600 text-center">{step.description}</p>
                    <p className="mt-4 text-sm text-gray-500 text-center">{step.details}</p>
                  </div>
                  
                  {step.id !== steps.length && (
                    <div className="lg:hidden flex justify-center mt-5 mb-5">
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* For Students Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">For Student Providers</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Turn your skills into income with StudServe
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Showcase Your Skills</h3>
              <p className="text-gray-600 text-center">
                Create a professional profile highlighting your skills, experience, and academic background to attract potential clients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Flexible Earnings</h3>
              <p className="text-gray-600 text-center">
                Set your own prices and work on your own schedule. Get paid securely once your client approves your delivered work.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Build Your Portfolio</h3>
              <p className="text-gray-600 text-center">
                Gain real-world experience and collect reviews that enhance your professional profile for future opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Is StudServe free to use?</h3>
              <p className="text-gray-600">
                StudServe is free to join and browse services. We charge a small service fee on completed transactions to maintain the platform and ensure security for all users.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How do I know if a student provider is qualified?</h3>
              <p className="text-gray-600">
                All student providers list their academic background, skills, and previous work experience. You can also review their portfolio and ratings from previous clients to assess their qualifications.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What happens if I'm not satisfied with the service?</h3>
              <p className="text-gray-600">
                You can request revisions from the provider as specified in their service description. If issues persist, our support team can help mediate and, if necessary, process a refund according to our terms of service.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How do I become a service provider?</h3>
              <p className="text-gray-600">
                You need to be an enrolled student at an accredited educational institution. You can register through our "Become a Provider" page and complete your profile with your academic information and skills.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
