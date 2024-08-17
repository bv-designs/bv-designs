import React from 'react';
import 'animate.css/animate.min.css';

const testimonials = [
  {
    name: "Jane Doe",
    title: "Homeowner",
    testimonial:
      "BV Designs truly transformed our home with their innovative design and space utilization. They guided us every step of the way and delivered the project on time, surpassing our expectations.",
  },
  {
    name: "John Smith",
    title: "CEO, TechCorp",
    testimonial:
      "The BV Designs team was exceptional. They provided us with the guidance we needed to redesign our office space for better productivity. Their timely delivery and focus on modern design were impressive.",
  },
  {
    name: "Sarah Lee",
    title: "Project Manager",
    testimonial:
      "Working with BV Designs was a breeze. Their innovative ideas for space utilization transformed our work environment into a modern, functional space. Their guidance and timely delivery were exactly what we needed.",
  },
  {
    name: "Michael Brown",
    title: "Restaurant Owner",
    testimonial:
      "BV Designs helped us redesign our restaurant, maximizing space utilization and bringing a fresh, modern look. Their guidance and ability to meet deadlines were truly outstanding.",
  },
  {
    name: "Laura Wilson",
    title: "Interior Designer",
    testimonial:
      "I was impressed with how BV Designs approached my project. Their fresh design ideas, excellent use of space, and timely delivery made the entire process enjoyable and stress-free.",
  },
];

const TestimonialsPage: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12 pt-24 h-[86vh]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 animate__animated animate__fadeInUp">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{testimonial.title}</p>
              <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
