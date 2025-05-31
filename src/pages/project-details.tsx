import React from 'react';
import { useParams } from 'react-router-dom';
import { useProjectContext } from '../store/projectContext';
import { motion } from 'framer-motion';
import {
  ProjectTimeline,
  TeamInvolved,
  TechnicalSpecifications,
} from '../components';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { projects } = useProjectContext();

  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[50vh] md:h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0"
      >
        <video
          src={project.videoSrc}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          // poster={project.videoPoster}
        >
          <source src={project.videoSrc} type="video/mp4" />
          <source src={project.videoSrc.replace('.mp4', '.webm')} type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
        <motion.div 
          className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto mt-16 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 px-4">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4">
            {project.description}
          </p>
        </motion.div>
      </motion.div>

      {/* Project Overview */}
      <motion.section 
        className="py-12 md:py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                Project Overview
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {project.overview}
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
                Key Details
              </h3>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h4 className="text-base md:text-lg font-medium text-gray-700">Total Area</h4>
                  <p className="text-xl md:text-2xl font-bold text-blue-600">3,500 sq. ft.</p>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-medium text-gray-700">Total Budget</h4>
                  <p className="text-xl md:text-2xl font-bold text-blue-600">₹11,25,00,000</p>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-medium text-gray-700">Timeline</h4>
                  <p className="text-lg md:text-xl text-gray-600">18 months</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section 
        className="py-12 md:py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {project.images.map((imageSrc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl"
              >
                <img
                  src={imageSrc}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-64 sm:h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  srcSet={`
                    ${imageSrc.replace('.jpg', '-small.jpg')} 300w,
                    ${imageSrc.replace('.jpg', '-medium.jpg')} 600w,
                    ${imageSrc} 1200w
                  `}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section 
        className="py-12 md:py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-lg md:text-2xl text-gray-700 italic mb-6 md:mb-8">
                "{project.testimonial}"
              </p>
              <div className="flex items-center justify-end">
                <div className="text-right">
                  <p className="text-base md:text-lg font-semibold text-gray-900">
                    {project.clientName}
                  </p>
                  <p className="text-sm md:text-base text-gray-600">Client</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Technical Details */}
      <motion.section 
        className="py-12 md:py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Technical Specifications
          </h2>
          <TechnicalSpecifications specifications={project.specifications} />
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="py-12 md:py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Our Team
          </h2>
          <TeamInvolved team={project.team} />
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section 
        className="py-12 md:py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Project Timeline
          </h2>
          <ProjectTimeline timeline={project.timeline} />
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-12 md:py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our innovative design solutions.
          </p>
          <motion.a
            href="/contact-us"
            className="inline-block bg-blue-600 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-blue-700 transition duration-300 text-base md:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectDetails;
