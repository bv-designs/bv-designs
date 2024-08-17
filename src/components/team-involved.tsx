import React from 'react';

type TeamMember = {
  name: string;
  role: string;
  photoUrl?: string;
};

const TeamInvolved: React.FC<{ team: TeamMember[] }> = ({ team }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-6">Team Involved</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {team.map((member, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            {member.photoUrl ? (
              <img
                src={member.photoUrl}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
            ) : (
              <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-gray-300 flex items-center justify-center text-gray-500 text-3xl font-bold">
                {member.name.charAt(0)}
              </div>
            )}
            <h3 className="text-lg font-semibold text-center text-gray-800">{member.name}</h3>
            <p className="text-center text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamInvolved;
