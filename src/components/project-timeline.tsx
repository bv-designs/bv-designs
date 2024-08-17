import React from 'react';

const ProjectTimeline: React.FC<{
  timeline: { date: string; description: string }[];
}> = ({ timeline }) => {
  return (
    <div className='mt-8 bg-gray-100 p-8 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-semibold mb-6 text-center'>
        Project Timeline
      </h2>
      <div className='flex justify-between items-center relative'>
        {timeline.map((event, index) => (
          <div key={index} className='relative text-center flex-1'>
            <div className='bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto'>
              {index + 1}
            </div>
            <div className='text-lg font-semibold text-gray-800'>
              {event.date}
            </div>
            <div className='text-gray-600'>{event.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTimeline;
