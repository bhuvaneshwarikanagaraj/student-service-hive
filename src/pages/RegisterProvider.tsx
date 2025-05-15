
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  confirmPassword: z.string().min(8, { message: "Please confirm your password." }),
  university: z.string().min(2, { message: "Please enter your university name." }),
  studentId: z.string().min(2, { message: "Student ID is required." }),
  bio: z.string().min(10, { message: "Bio must be at least 10 characters." }).max(500),
  skills: z.string().min(2, { message: "Please list at least one skill." }),
  serviceType: z.enum(["tutoring", "writing", "design", "programming", "other"], {
    required_error: "Please select a service type.",
  }),
  agreeTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms and conditions." }),
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type FormValues = z.infer<typeof formSchema>;

const RegisterProvider = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      university: "",
      studentId: "",
      bio: "",
      skills: "",
      serviceType: "tutoring",
      agreeTerms: false,
    },
  });

  const onSubmit = (values: FormValues) => {
    // In a real application, you would submit this data to your backend
    console.log(values);
    toast({
      title: "Registration Submitted",
      description: "Your provider account request has been submitted for approval.",
    });
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const nextStep = async () => {
    // Validate current step fields before proceeding
    if (step === 1) {
      const result = await form.trigger(['firstName', 'lastName', 'email', 'password', 'confirmPassword']);
      if (!result) return;
    } else if (step === 2) {
      const result = await form.trigger(['university', 'studentId', 'bio']);
      if (!result) return;
    }
    
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 bg-gray-50">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow rounded-lg p-6 md:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Become a Provider</h1>
            <p className="text-gray-600 mb-6">
              Join our marketplace and start offering your services to clients looking for student talents.
            </p>

            {/* Progress indicator */}
            <div className="relative mb-8">
              <div className="flex items-center justify-between mb-2">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      i + 1 <= step ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="h-1 bg-gray-200 absolute top-4 left-0 right-0 -z-10 rounded-full">
                <div 
                  className="h-1 bg-indigo-600 rounded-full transition-all" 
                  style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-sm text-gray-600">Basic Info</span>
                <span className="text-sm text-gray-600">Academic Profile</span>
                <span className="text-sm text-gray-600">Service Details</span>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
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
                        control={form.control}
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
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@university.edu" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                
                {step === 2 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800">Academic Information</h2>
                    
                    <FormField
                      control={form.control}
                      name="university"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>University/Institution</FormLabel>
                          <FormControl>
                            <Input placeholder="Stanford University" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
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
                      control={form.control}
                      name="bio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>About You</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell potential clients about yourself, your experience, and why they should hire you."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800">Service Information</h2>
                    
                    <FormField
                      control={form.control}
                      name="skills"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Skills</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Programming, design, writing, etc. (comma separated)"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="serviceType"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>What type of services will you provide?</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-1 md:grid-cols-2 gap-2"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="tutoring" id="tutoring" />
                                <Label htmlFor="tutoring">Tutoring</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="writing" id="writing" />
                                <Label htmlFor="writing">Writing & Translation</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="design" id="design" />
                                <Label htmlFor="design">Design & Creative</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="programming" id="programming" />
                                <Label htmlFor="programming">Programming & Tech</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="other" id="other" />
                                <Label htmlFor="other">Other</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="agreeTerms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to the <a href="/terms" className="text-indigo-600 hover:text-indigo-500">Terms of Service</a> and <a href="/privacy" className="text-indigo-600 hover:text-indigo-500">Privacy Policy</a>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                <div className="flex justify-between pt-4">
                  {step > 1 ? (
                    <Button 
                      type="button" 
                      onClick={prevStep}
                      variant="outline"
                    >
                      Previous
                    </Button>
                  ) : <div></div>}
                  
                  {step < totalSteps ? (
                    <Button 
                      type="button" 
                      onClick={nextStep}
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button type="submit">
                      Submit Application
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterProvider;
