import React from 'react';
import { useParams } from 'react-router-dom';
import { useProjectContext } from '../store/projectContext';
import { ProjectTimeline, TeamInvolved, TechnicalSpecifications } from '../components'


const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { projects } = useProjectContext();

  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='p-4 text-black pt-20'>
      <div className='flex flex-col lg:flex-row gap-4'>
        <video
          src={project.videoSrc}
          className='object-cover h-[90vh] w-25 rounded-md'
          muted
          autoPlay
          loop
        />
        <div>
          <h3 className='font-bold text-5xl'>{project.title}</h3>
          <p className='mt-4 text-xl '>{project.description}</p>
        </div>
      </div>

      {/* Project Overview */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-lg text-gray-700">{project.overview}</p>
      </div>

      {/* Image Gallery */}
      <div className='mt-8'>
        <h2 className='text-xl font-semibold mb-4'>Gallery</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {project.images.map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              alt={`Gallery Image ${index + 1}`}
              className='object-cover rounded-lg'
            />
          ))}
        </div>
      </div>

      {/* Client Testimonial */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Client Testimonial</h2>
        <p className="text-lg italic text-gray-700">"{project.testimonial}"</p>
        <p className="text-right font-bold text-gray-800">- {project.clientName}</p>
      </div>

      {/* Project Timeline */}
      <ProjectTimeline timeline={project.timeline} />

      {/* Technical Specifications */}
      <TechnicalSpecifications specifications={project.specifications} />

      {/* Team Involved */}
      <TeamInvolved team={project.team} />

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Interested in Starting a Project?</h2>
        <p className="text-lg text-gray-700 mb-6">Contact us today to discuss your vision and how we can bring it to life.</p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
          Contact Us
        </button>
      </div>
      
      {/* Related Projects */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Related Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.relatedProjects?.map((relatedProject, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{relatedProject.title}</h3>
              <p className="text-gray-600">{relatedProject.description}</p>
              <a href={`/projects/${relatedProject.id}`} className="text-blue-600 hover:underline mt-2 inline-block">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
