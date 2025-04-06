import { VideoGrid } from '../components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Projects: React.FC = () => {
  const processRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: processScroll } = useScroll({
    target: processRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: ctaScroll } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"]
  });

  const processY = useTransform(processScroll, [0, 1], [100, -100]);
  const ctaScale = useTransform(ctaScroll, [0, 0.5, 1], [0.95, 1, 0.95]);
  const ctaOpacity = useTransform(ctaScroll, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black">
      <VideoGrid from='project' />
      
      <motion.section 
        ref={processRef}
        className='project-process bg-white/90 backdrop-blur-lg py-16 relative overflow-hidden'
        style={{ y: processY }}
      >
        <div className='container mx-auto text-center px-4'>
          <motion.h2 
            className='text-4xl font-bold text-gray-800 mb-8'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Process
          </motion.h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className='p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3 className='text-2xl font-semibold mb-4 text-gray-800'>{step.title}</h3>
                <p className='text-gray-600 leading-relaxed'>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        ref={ctaRef}
        className='cta-section bg-blue-600/90 backdrop-blur-lg py-16 relative'
        style={{ scale: ctaScale, opacity: ctaOpacity }}
      >
        <div className='container mx-auto text-center px-4'>
          <motion.h2 
            className='text-4xl md:text-5xl font-bold mb-6 text-white'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p 
            className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contact us today to discuss your vision, and let us bring it to life
            with our innovative design solutions.
          </motion.p>
          <motion.a
            href='/contact-us'
            className='inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition duration-300 text-lg'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
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

const processSteps = [
  {
    title: "Conceptual Design",
    description: "We begin with a deep understanding of your needs and vision, creating a unique concept that reflects your style and goals."
  },
  {
    title: "Detailed Planning",
    description: "Our team meticulously plans every detail, ensuring that the project progresses smoothly and efficiently."
  },
  {
    title: "Execution & Delivery",
    description: "We bring the design to life with precision and craftsmanship, delivering a final product that exceeds your expectations."
  }
];

export default Projects;
