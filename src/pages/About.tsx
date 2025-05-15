
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Shield, Heart } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Emma Rodriguez",
      role: "Founder & CEO",
      image: "/placeholder.svg",
      bio: "Former student entrepreneur who created StudServe to help students monetize their skills and gain real-world experience."
    },
    {
      name: "David Chen",
      role: "Chief Technology Officer",
      image: "/placeholder.svg",
      bio: "Computer Science graduate who built the first version of StudServe as his senior project before joining full-time."
    },
    {
      name: "Sophia Kim",
      role: "Head of Student Success",
      image: "/placeholder.svg",
      bio: "Education specialist focused on helping student providers develop marketable skills and build their portfolios."
    }
  ];

  const values = [
    {
      title: "Student Empowerment",
      description: "We believe in creating opportunities for students to develop practical skills and earn income while studying.",
      icon: <BookOpen className="h-8 w-8 text-indigo-600" />
    },
    {
      title: "Community & Connection",
      description: "We foster a supportive community where students can connect with peers and clients from diverse backgrounds.",
      icon: <Users className="h-8 w-8 text-indigo-600" />
    },
    {
      title: "Trust & Security",
      description: "We prioritize creating a safe platform with transparent processes for both service providers and clients.",
      icon: <Shield className="h-8 w-8 text-indigo-600" />
    },
    {
      title: "Social Impact",
      description: "We're committed to making education more accessible and helping students reduce financial burdens.",
      icon: <Heart className="h-8 w-8 text-indigo-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-indigo-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About StudServe
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Empowering students to showcase their skills and earn while learning
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">Our Story</h2>
              <div className="text-lg text-gray-600 space-y-4">
                <p>
                  StudServe was born from a simple observation: students have valuable skills but limited opportunities to use them professionally while studying.
                </p>
                <p>
                  Founded in 2023 by Emma Rodriguez, a former student entrepreneur, StudServe began as a small platform connecting students at a single university with local businesses and individuals needing affordable services.
                </p>
                <p>
                  Today, we've grown to connect thousands of talented students with clients nationwide, helping students earn income, gain experience, and build portfolios while providing affordable, quality services to our clients.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                src="/placeholder.svg"
                alt="Students collaborating"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">{value.title}</h3>
                <p className="text-gray-600 text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              The people behind StudServe
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-indigo-600 mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Impact Stats */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Our Impact
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl opacity-80">
              Making a difference for students and clients alike
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div>
              <div className="text-4xl font-extrabold mb-2">5,000+</div>
              <p className="text-xl opacity-80">Student providers</p>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-2">200+</div>
              <p className="text-xl opacity-80">Universities represented</p>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-2">$2M+</div>
              <p className="text-xl opacity-80">Earned by students</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
