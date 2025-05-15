
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/layout/Navbar";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  title: z.string().min(10, "Title must be at least 10 characters"),
  description: z.string().min(30, "Description must be at least 30 characters"),
  category: z.string().min(1, "Please select a category"),
  price: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Price must be a positive number",
  }),
  deliveryTime: z.string().min(1, "Please specify delivery time"),
});

const CreateGig = () => {
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      price: "",
      deliveryTime: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would submit to an API
    console.log(values);
    
    // Show success toast
    toast({
      title: "Service created successfully!",
      description: "Your gig has been created and is pending review.",
    });
    
    // Redirect to profile page
    setTimeout(() => {
      navigate("/profile");
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <Link to="/profile" className="inline-flex items-center mb-6 text-indigo-600 hover:text-indigo-800">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Profile
        </Link>
        
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Create a New Service</CardTitle>
            <CardDescription>
              Showcase your skills by creating a service gig that others can purchase.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Title</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Professional Web Development" {...field} />
                      </FormControl>
                      <FormDescription>
                        A clear title helps potential buyers understand your service.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <textarea 
                          className="flex h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Describe your service in detail..."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Provide a detailed description of what you offer.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <select 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            {...field}
                          >
                            <option value="">Select a category</option>
                            <option value="web_development">Web Development</option>
                            <option value="design">Design & Creative</option>
                            <option value="writing">Writing & Translation</option>
                            <option value="marketing">Digital Marketing</option>
                            <option value="tutoring">Tutoring</option>
                            <option value="programming">Programming</option>
                            <option value="data">Data & Analytics</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Starting Price ($)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="29.99" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="deliveryTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Delivery Time</FormLabel>
                      <FormControl>
                        <select 
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          {...field}
                        >
                          <option value="">Select delivery time</option>
                          <option value="1">1 day</option>
                          <option value="2">2 days</option>
                          <option value="3">3 days</option>
                          <option value="5">5 days</option>
                          <option value="7">7 days</option>
                          <option value="14">14 days</option>
                          <option value="30">30 days</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Image upload would be added here in a real implementation */}
                
                <div className="flex justify-end space-x-4">
                  <Button type="button" variant="outline" onClick={() => navigate("/profile")}>
                    Cancel
                  </Button>
                  <Button type="submit">Create Service</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateGig;
