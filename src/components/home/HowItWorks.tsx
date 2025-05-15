
import React from 'react';
import { ArrowRight, Search, CheckCircle, CreditCard } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Browse Services',
    description: 'Explore a wide range of services offered by talented students across various categories.',
    icon: <Search className="h-8 w-8 text-white" />
  },
  {
    id: 2,
    title: 'Place an Order',
    description: 'Choose a service that matches your needs, discuss requirements, and place your order securely.',
    icon: <CreditCard className="h-8 w-8 text-white" />
  },
  {
    id: 3,
    title: 'Receive & Review',
    description: 'Get your work delivered on time, review it, and request revisions if needed before final approval.',
    icon: <CheckCircle className="h-8 w-8 text-white" />
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How it works</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Getting student services has never been easier
          </p>
        </div>
        
        <div className="mt-10">
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden absolute top-12 w-full h-0.5 bg-gray-200 lg:block" aria-hidden="true"></div>
            
            {/* Steps */}
            <div className="grid gap-8 lg:grid-cols-3">
              {steps.map((step) => (
                <div key={step.id} className="relative">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 mb-5">
                      {step.icon}
                    </div>
                    <h3 className="mt-2 text-lg font-medium text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-base text-gray-500 text-center">{step.description}</p>
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
      </div>
    </section>
  );
};

export default HowItWorks;
