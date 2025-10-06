import React, { useState } from 'react';
import { Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useProjectContext } from '../store/projectContext';
import { motion } from 'framer-motion';

interface Props {
  from: 'home' | 'project';
  onVideosLoaded?: () => void;
}

const VideoGrid: React.FC<Props> = ({ from, onVideosLoaded }: Props) => {
  const navigate = useNavigate();
  const { projects } = useProjectContext();
  const [videoErrors, setVideoErrors] = useState<Set<string>>(new Set());
  const [loadedVideos, setLoadedVideos] = useState<Set<string>>(new Set());

  const handleClick = (id: string) => {
    navigate(`/projects/${id}`);
  };

  const handleVideoLoad = (id: string) => {
    setLoadedVideos(prev => {
      const newSet = new Set([...prev, id]);
      if (newSet.size === projectToshow.length && onVideosLoaded) {
        onVideosLoaded();
      }
      return newSet;
    });
  };

  const handleVideoError = (id: string) => {
    setVideoErrors(prev => new Set([...prev, id]));
    handleVideoLoad(id); // Still count as "loaded" to prevent infinite loading
  };

  const projectToshow = from === 'home' ? projects.slice(0, 4) : projects;

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      {projectToshow.map((project) => (
        <Card
          key={project.id}
          className="relative w-full bg-black overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
          onClick={() => handleClick(project.id)}
        //sx={{ height: '300px' }}
        >
          {!videoErrors.has(project.id) ? (
            <video
              src={project.videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              onLoadedData={(e) => {
                e.currentTarget.play().catch(err => {
                  console.error('Video play error:', err);
                  handleVideoError(project.id);
                });
                if (!loadedVideos.has(project.id)) {
                  handleVideoLoad(project.id);
                }
              }}
              onError={() => {
                console.error('Video load error for:', project.videoSrc);
                handleVideoError(project.id);
              }}
            />
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">🎬</div>
                <div className="text-sm">Video unavailable</div>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            {/* Empty div for hover effect */}
          </div>
          <div className="absolute bottom-2 right-2 text-white text-lg font-semibold bg-black bg-opacity-60 px-2 py-1 rounded">
            {project.title}
          </div>
        </Card>
      ))}
    </motion.div>
  );
};

export default VideoGrid;
