
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import Navbar from "@/components/layout/Navbar";

// Define schemas for each step
const personalInfoSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email(),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

const academicInfoSchema = z.object({
  university: z.string().min(2, "University name is required"),
  major: z.string().min(2, "Major is required"),
  studentId: z.string().min(2, "Student ID is required"),
  graduationYear: z.string().regex(/^\d{4}$/, "Please enter a valid year (e.g. 2025)"),
});

const serviceInfoSchema = z.object({
  serviceCategory: z.string().min(1, "Please select a service category"),
  skills: z.string().min(3, "Please list your skills"),
  bio: z.string().min(30, "Bio must be at least 30 characters"),
});

const RegisterProvider = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    university: '',
    major: '',
    studentId: '',
    graduationYear: '',
    serviceCategory: '',
    skills: '',
    bio: '',
  });
  
  const personalForm = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
    },
  });

  const academicForm = useForm<z.infer<typeof academicInfoSchema>>({
    resolver: zodResolver(academicInfoSchema),
    defaultValues: {
      university: formData.university,
      major: formData.major,
      studentId: formData.studentId,
      graduationYear: formData.graduationYear,
    },
  });

  const serviceForm = useForm<z.infer<typeof serviceInfoSchema>>({
    resolver: zodResolver(serviceInfoSchema),
    defaultValues: {
      serviceCategory: formData.serviceCategory,
      skills: formData.skills,
      bio: formData.bio,
    },
  });
  
  const goToNextStep = () => {
    setStep(step + 1);
  };
  
  const goToPreviousStep = () => {
    setStep(step - 1);
  };
  
  const submitPersonalInfo = (data: z.infer<typeof personalInfoSchema>) => {
    setFormData({ ...formData, ...data });
    goToNextStep();
  };
  
  const submitAcademicInfo = (data: z.infer<typeof academicInfoSchema>) => {
    setFormData({ ...formData, ...data });
    goToNextStep();
  };
  
  const submitServiceInfo = (data: z.infer<typeof serviceInfoSchema>) => {
    // Final submission with all data
    const finalData = { ...formData, ...data };
    console.log("Form submitted with data:", finalData);
    
    // Show success toast
    toast({
      title: "Registration successful!",
      description: "Your provider account has been created.",
    });
    
    // Redirect to profile page
    setTimeout(() => {
      navigate("/profile");
    }, 1500);
  };

  // Define step titles and descriptions
  const steps = [
    {
      title: "Personal Information",
      description: "Provide your contact details",
    },
    {
      title: "Academic Information",
      description: "Tell us about your educational background",
    },
    {
      title: "Service Information",
      description: "Share details about the services you'll offer",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle>Become a Service Provider</CardTitle>
            <CardDescription>
              Step {step} of 3: {steps[step - 1].description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <Form {...personalForm}>
                <form onSubmit={personalForm.handleSubmit(submitPersonalInfo)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={personalForm.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={personalForm.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={personalForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john.doe@university.edu" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={personalForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(123) 456-7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-end">
                    <Button type="submit">Continue</Button>
                  </div>
                </form>
              </Form>
            )}
            
            {/* Step 2: Academic Information */}
            {step === 2 && (
              <Form {...academicForm}>
                <form onSubmit={academicForm.handleSubmit(submitAcademicInfo)} className="space-y-6">
                  <FormField
                    control={academicForm.control}
                    name="university"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>University/College</FormLabel>
                        <FormControl>
                          <Input placeholder="State University" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={academicForm.control}
                    name="major"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Major/Field of Study</FormLabel>
                        <FormControl>
                          <Input placeholder="Computer Science" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={academicForm.control}
                      name="studentId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Student ID</FormLabel>
                          <FormControl>
                            <Input placeholder="S12345678" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={academicForm.control}
                      name="graduationYear"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Graduation Year</FormLabel>
                          <FormControl>
                            <Input placeholder="2025" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={goToPreviousStep}>
                      Back
                    </Button>
                    <Button type="submit">Continue</Button>
                  </div>
                </form>
              </Form>
            )}
            
            {/* Step 3: Service Information */}
            {step === 3 && (
              <Form {...serviceForm}>
                <form onSubmit={serviceForm.handleSubmit(submitServiceInfo)} className="space-y-6">
                  <FormField
                    control={serviceForm.control}
                    name="serviceCategory"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Category</FormLabel>
                        <FormControl>
                          <select 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            {...field}
                          >
                            <option value="">Select a category</option>
                            <option value="design">Design & Creative</option>
                            <option value="programming">Programming & Tech</option>
                            <option value="writing">Writing & Translation</option>
                            <option value="data">Data & Analytics</option>
                            <option value="marketing">Digital Marketing</option>
                            <option value="tutoring">Tutoring & Education</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={serviceForm.control}
                    name="skills"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Skills (comma separated)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. JavaScript, React, UI Design" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={serviceForm.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bio / About Me</FormLabel>
                        <FormControl>
                          <textarea 
                            className="flex h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Tell potential clients about yourself and your expertise..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={goToPreviousStep}>
                      Back
                    </Button>
                    <Button type="submit">Complete Registration</Button>
                  </div>
                </form>
              </Form>
            )}
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <div className="flex justify-between w-full">
              {[1, 2, 3].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`flex-1 px-2 py-1 mx-1 text-center text-xs rounded-md ${
                    step === stepNumber
                      ? "bg-primary text-primary-foreground font-medium"
                      : step > stepNumber
                      ? "bg-primary/20 text-primary"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  Step {stepNumber}
                </div>
              ))}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default RegisterProvider;
