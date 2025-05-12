
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail } from "lucide-react";

const facultyMembers = [
  {
    id: 1,
    name: "Mphil.Abdul-Wakil Yakubu Iddrisu ",
    position: "Lecturer",
    email: "abdul-wakil@cs.edu",
    specialization: "Mobile and Game development",
    initials: "AY"
  },
  {
    id: 2,
    name: "Dr. Alhassan Salamudeen",
    position: "Lecturer",
    email: "alhassansalamudeen@cs.edu",
    specialization: "Digital Logic",
    initials: "AS"
  },
  {
    id: 3,
    name: "Dr. Lawrences Tandoh",
    position: "Exams Officer",
    email: "tandohlawrence@cs.edu",
    specialization: "Software Engineering",
    initials: "LT"
  },
  {
    id: 4,
    name: "Mr. Saa-Dittoh Francis",
    position: "Lecturer",
    email: "saa-dittohfrancis@cs.edu",
    specialization: "Data Science",
    initials: "FSD"
  },
  {
    id: 5,
    name: "Mr.Iddrisu Mohammed Katali",
    position: "Lecturer",
    email: "iddrisukatali@cs.edu",
    specialization: "Number theory and cryptography",
    initials: "MIK"
  },
  {
    id: 6,
    name: "Prof.Alhassan Abdul-Barik",
    position: "Professor",
    email: "alhassanabdulbarik@cs.edu",
    specialization: "Computer Hardware and Architecture",
    initials: "ABA"
  },
];

const FacultyDirectory = ({ limit = facultyMembers.length }) => {
  const displayedFaculty = facultyMembers.slice(0, limit);
  
  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Faculty Directory</h2>
        {limit < facultyMembers.length && (
          <a href="/faculty" className="text-csblue hover:underline text-sm">
            View all faculty
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {displayedFaculty.map((faculty) => (
          <Card key={faculty.id} className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-center">
                <Avatar className="h-12 w-12 bg-csblue text-dark">
                  <AvatarFallback>{faculty.initials}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h3 className="font-bold">{faculty.name}</h3>
                  <p className="text-sm text-gray-600">{faculty.position}</p>
                  <p className="text-sm text-gray-600">{faculty.specialization}</p>
                  <a href={`mailto:${faculty.email}`} className="text-xs text-csblue flex items-center mt-1 hover:underline">
                    <Mail className="h-3 w-3 mr-1" />
                    {faculty.email}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FacultyDirectory;
