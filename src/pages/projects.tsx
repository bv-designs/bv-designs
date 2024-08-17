import { VideoGrid } from '../components';

const Projects: React.FC = () => {
  return (
    <>
      <VideoGrid from='project' />
      <section className='project-process bg-white py-12'>
        <div className='container mx-auto text-center'>
          <h2 className='text-4xl font-bold text-gray-800 mb-6'>Our Process</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='p-6'>
              <h3 className='text-2xl font-semibold mb-2'>Conceptual Design</h3>
              <p className='text-gray-600'>
                We begin with a deep understanding of your needs and vision,
                creating a unique concept that reflects your style and goals.
              </p>
            </div>
            <div className='p-6'>
              <h3 className='text-2xl font-semibold mb-2'>Detailed Planning</h3>
              <p className='text-gray-600'>
                Our team meticulously plans every detail, ensuring that the
                project progresses smoothly and efficiently.
              </p>
            </div>
            <div className='p-6'>
              <h3 className='text-2xl font-semibold mb-2'>
                Execution & Delivery
              </h3>
              <p className='text-gray-600'>
                We bring the design to life with precision and craftsmanship,
                delivering a final product that exceeds your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='cta-section bg-blue-600 py-12 text-center text-white'>
        <h2 className='text-4xl font-bold mb-4'>
          Ready to Start Your Project?
        </h2>
        <p className='text-lg mb-6'>
          Contact us today to discuss your vision, and let us bring it to life
          with our innovative design solutions.
        </p>
        <a
          href='/contact-us'
          className='bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300'
        >
          Get in Touch
        </a>
      </section>
    </>
  );
};

export default Projects;
