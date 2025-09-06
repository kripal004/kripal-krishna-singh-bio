import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Kripal is a highly skilled and dedicated developer. His expertise in React and his problem-solving abilities were instrumental in the success of our project. He's a great team player and a pleasure to work with.",
    name: 'Jane Doe',
    title: 'Project Manager, Aerospace Client',
  },
  {
    quote: "Working with Kripal was a fantastic experience. He has a deep understanding of front-end architecture and consistently delivers high-quality, maintainable code. His contributions to our component library were invaluable.",
    name: 'John Smith',
    title: 'Lead Engineer, Aventior Digital',
  },
  // Add more testimonials here
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-8">What Others Say</h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}