
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Grid2X2, PenLine, Plus, LayoutDashboard, MessageSquare, FileText } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { label: "Total Gigs", value: "2" },
    { label: "Active Orders", value: "1" },
    { label: "Completed Orders", value: "5" },
    { label: "Earnings", value: "$320" },
  ];

  const recentOrders = [
    {
      id: "ord-123",
      service: "Professional Website Development",
      buyer: "John Smith",
      status: "In Progress",
      due: "May 20, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-64 space-y-4">
            <h2 className="text-xl font-bold mb-4">Dashboard</h2>
            
            <nav className="space-y-1">
              <Link to="/dashboard">
                <Button variant="ghost" className="w-full justify-start">
                  <LayoutDashboard className="mr-2 h-4 w-4" /> Overview
                </Button>
              </Link>
              <Link to="/profile">
                <Button variant="ghost" className="w-full justify-start">
                  <PenLine className="mr-2 h-4 w-4" /> My Profile
                </Button>
              </Link>
              <Link to="/messages">
                <Button variant="ghost" className="w-full justify-start">
                  <MessageSquare className="mr-2 h-4 w-4" /> Messages
                </Button>
              </Link>
              <Link to="/orders">
                <Button variant="ghost" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" /> Orders
                </Button>
              </Link>
              <Link to="/gigs">
                <Button variant="ghost" className="w-full justify-start">
                  <Grid2X2 className="mr-2 h-4 w-4" /> My Services
                </Button>
              </Link>
            </nav>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Student Dashboard</h2>
              <Link to="/create-gig">
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Create New Gig
                </Button>
              </Link>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Active Orders */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Active Orders</CardTitle>
                <CardDescription>Your currently active service orders</CardDescription>
              </CardHeader>
              <CardContent>
                {recentOrders.length > 0 ? (
                  <div className="border rounded-md divide-y">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="p-4 flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">{order.service}</h4>
                          <p className="text-sm text-gray-600">Ordered by {order.buyer}</p>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                            {order.status}
                          </span>
                          <p className="text-sm text-gray-600 mt-1">Due {order.due}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center py-6 text-gray-600">No active orders</p>
                )}
              </CardContent>
            </Card>
            
            {/* Quick Links */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">My Services</h3>
                    <Grid2X2 className="h-5 w-5 text-indigo-600" />
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Manage your service offerings and create new gigs</p>
                  <Link to="/profile">
                    <Button variant="outline" className="w-full">View Services</Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Edit Profile</h3>
                    <PenLine className="h-5 w-5 text-indigo-600" />
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Update your profile information and portfolio</p>
                  <Link to="/profile/edit">
                    <Button variant="outline" className="w-full">Edit Profile</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
