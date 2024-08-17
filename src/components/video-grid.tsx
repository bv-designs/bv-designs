import React from 'react';
import { Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useProjectContext } from '../store/projectContext';

interface Props {
  from: 'home' | 'project'
}

const VideoGrid: React.FC<Props> = ({from}: Props) => {
  const navigate = useNavigate();
  const { projects } = useProjectContext();

  const handleClick = (id: string) => {
    navigate(`/projects/${id}`);
  };

  const projectToshow = from === 'home' ? projects.slice(0,4) : projects

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {projectToshow.map((project) => (
        // <Card
        //   key={project.id}
        //   className="relative w-full bg-black overflow-hidden cursor-pointer"
        //   onClick={() => handleClick(project.id)}
        // >
        //   <video
        //     src={project.videoSrc}
        //     autoPlay
        //     loop
        //     muted
        //     className="w-full h-full object-cover"
        //     onLoadedData={(e) => e.currentTarget.play().catch(err => console.error(err))}
        //   />
        //   <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
        //   </div>
        // </Card>
         <Card
         key={project.id}
         className="relative w-full bg-black overflow-hidden cursor-pointer"
         onClick={() => handleClick(project.id)}
       >
         <video
           src={project.videoSrc}
           autoPlay
           loop
           muted
           className="w-full h-full object-cover"
           onLoadedData={(e) => e.currentTarget.play().catch(err => console.error(err))}
         />
         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
           {/* Empty div for hover effect */}
         </div>
         <div className="absolute bottom-2 right-2 text-white text-lg font-semibold bg-black bg-opacity-60 px-2 py-1 rounded">
           {project.title}
         </div>
       </Card>
      ))}
    </div>
  );
};

export default VideoGrid;
