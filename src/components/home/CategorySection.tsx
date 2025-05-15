
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Code, PenTool, Book, Edit, Film, Camera, BarChart4, Languages } from 'lucide-react';

const categories = [
  {
    id: 'programming',
    name: 'Programming & Tech',
    description: 'Web development, mobile apps, coding assignments',
    icon: <Code className="h-8 w-8 text-indigo-600" />,
    url: '/services/programming'
  },
  {
    id: 'design',
    name: 'Design & Creative',
    description: 'Graphic design, UI/UX, logos, illustrations',
    icon: <PenTool className="h-8 w-8 text-indigo-600" />,
    url: '/services/design'
  },
  {
    id: 'tutoring',
    name: 'Tutoring & Academics',
    description: 'Subject tutoring, exam prep, research assistance',
    icon: <Book className="h-8 w-8 text-indigo-600" />,
    url: '/services/tutoring'
  },
  {
    id: 'writing',
    name: 'Writing & Translation',
    description: 'Essays, proofreading, editing, translation',
    icon: <Edit className="h-8 w-8 text-indigo-600" />,
    url: '/services/writing'
  },
  {
    id: 'video',
    name: 'Video & Animation',
    description: 'Video editing, animations, presentations',
    icon: <Film className="h-8 w-8 text-indigo-600" />,
    url: '/services/video'
  },
  {
    id: 'photography',
    name: 'Photography',
    description: 'Portraits, event photography, photo editing',
    icon: <Camera className="h-8 w-8 text-indigo-600" />,
    url: '/services/photography'
  },
  {
    id: 'business',
    name: 'Business & Marketing',
    description: 'Market research, social media, business plans',
    icon: <BarChart4 className="h-8 w-8 text-indigo-600" />,
    url: '/services/business'
  },
  {
    id: 'language',
    name: 'Language Services',
    description: 'Translations, language lessons, proofreading',
    icon: <Languages className="h-8 w-8 text-indigo-600" />,
    url: '/services/language'
  },
];

const CategorySection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Explore our service categories
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Discover student-provided services across various categories
          </p>
        </div>
        
        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-4 lg:max-w-none md:grid-cols-2">
          {categories.map((category) => (
            <Link key={category.id} to={category.url}>
              <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-50 mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
