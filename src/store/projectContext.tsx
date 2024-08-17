import React, { createContext, useContext, ReactNode } from 'react';
import { projectData,Project } from './project'

interface ProjectContextProps {
  projects: Project[];
}

const ProjectContext = createContext<ProjectContextProps | undefined>(
  undefined
);



export const ProjectProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <ProjectContext.Provider value={{ projects: projectData }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjectContext must be used within a ProjectProvider');
  }
  return context;
};
