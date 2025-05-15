
import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Grid2X2, PenLine, Plus } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import GigCard from "@/components/profile/GigCard";
import { useToast } from "@/components/ui/use-toast";

const mockStudentData = {
  name: "Alex Johnson",
  university: "State University",
  major: "Computer Science",
  year: "Junior",
  bio: "Passionate about web development and design. I love creating user-friendly interfaces and solving complex problems.",
  skills: ["Web Development", "UI/UX Design", "JavaScript", "React", "Node.js"],
  joinedDate: "May 2023",
  avatar: "/placeholder.svg",
};

const mockGigs = [
  {
    id: "1",
    title: "Professional Website Development",
    description: "I will build a responsive, modern website for your business or personal use.",
    price: 120,
    deliveryTime: "3 days",
    category: "Web Development",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    title: "UI/UX Design for Mobile Apps",
    description: "Get a clean, intuitive user interface design for your mobile application.",
    price: 80,
    deliveryTime: "2 days",
    category: "Design",
    image: "/placeholder.svg",
  },
];

const StudentProfile = () => {
  const { toast } = useToast();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Profile Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src={mockStudentData.avatar} alt={mockStudentData.name} />
                  <AvatarFallback>{mockStudentData.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                
                <h2 className="text-2xl font-bold">{mockStudentData.name}</h2>
                <p className="text-gray-600">{`${mockStudentData.major} • ${mockStudentData.year}`}</p>
                <p className="text-gray-600 mb-4">{mockStudentData.university}</p>
                
                <Link to="/profile/edit">
                  <Button variant="outline" className="w-full mb-2">
                    <PenLine className="mr-2 h-4 w-4" /> Edit Profile
                  </Button>
                </Link>
                
                <Link to="/dashboard">
                  <Button variant="outline" className="w-full">
                    <Grid2X2 className="mr-2 h-4 w-4" /> Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{mockStudentData.bio}</p>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {mockStudentData.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 text-sm text-gray-500">
                  Member since {mockStudentData.joinedDate}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Gigs Section */}
          <div className="md:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">My Services</h2>
              <Link to="/create-gig">
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Create New Gig
                </Button>
              </Link>
            </div>
            
            {mockGigs.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2">
                {mockGigs.map(gig => (
                  <GigCard key={gig.id} gig={gig} />
                ))}
              </div>
            ) : (
              <Card className="border-dashed border-2 bg-gray-50">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-2">No services yet</h3>
                  <p className="text-gray-600 mb-6">Start creating your first service gig to showcase your skills</p>
                  <Link to="/create-gig">
                    <Button>
                      <Plus className="mr-2 h-4 w-4" /> Create Your First Gig
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
