
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="bg-indigo-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-3 max-w-md text-lg text-indigo-100">
              Whether you're looking to offer your skills or need help with a project, join our community today.
            </p>
            <div className="mt-8 flex space-x-4">
              <Link to="/register?role=seller">
                <Button className="bg-white text-indigo-700 hover:bg-indigo-50">
                  Become a Provider
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-white text-white hover:bg-indigo-600">
                  Find Services
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Are you a university representative?</h3>
                  </div>
                </div>
                <div className="mt-4 text-base text-gray-500">
                  <p>
                    We partner with universities to create official campus marketplaces. Contact us to learn how your institution can benefit.
                  </p>
                  <div className="mt-6">
                    <Link to="/contact">
                      <Button variant="outline" className="text-indigo-700 border-indigo-700 hover:bg-indigo-50">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
