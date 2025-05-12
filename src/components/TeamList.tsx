import React from 'react'


// Define type for team member
type TeamMember = {
  name: string;
  indexNumber: string;
  gender: 'Male' | 'Female' | 'Other';
};

// Example data
const teamMembers: TeamMember[] = [
  { name: 'Kelvin Fosu', indexNumber: 'CSC/0041/22', gender: 'Male' },
  { name: 'Samuel Osei Danso Frempong', indexNumber: 'CSC/0042/22', gender: 'Male' },
  { name: 'Habib Napari Alhassan', indexNumber: 'CSC/0041/23', gender: 'Male' },
  { name: 'Humu Afiso Gbankulso', indexNumber: 'CSC/0044/22', gender: 'Male' },
  { name: 'Hamdan Sibdoo Zakaria Hamidu', indexNumber: 'CSC/0047/22', gender: 'Male' },
  { name: 'Maxwell Atoa Aliya ', indexNumber: 'CSC/0049/23', gender: 'Male' },
  { name: 'Sumaila Ibrahim ', indexNumber: 'CSC/0050/22', gender: 'Male' },
  { name: 'Musah Kalaamulaahi Sijou Issahaku', indexNumber: 'CSC/0061/22', gender: 'Male' },
  { name: 'Saliu Asumah Yaw', indexNumber: 'CSC/0096/22', gender: 'Male' },
];

const TeamList: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Group five(5)</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b text-left">Name</th>
              <th className="px-4 py-2 border-b text-left">Index Number</th>
              <th className="px-4 py-2 border-b text-left">Gender</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{member.name}</td>
                <td className="px-4 py-2 border-b">{member.indexNumber}</td>
                <td className="px-4 py-2 border-b">{member.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamList;

