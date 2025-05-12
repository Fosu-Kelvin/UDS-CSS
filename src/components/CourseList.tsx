
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    id: "CSC 306",
    name: "Mobile Device Programming",
    level: "Undergraduate",
    credits: 3,
    description: "Designing mobile base application."
  },
  {
    id: "CSC 310",
    name: "Game Design and Programming",
    level: "Undergraduate",
    credits: 3,
    description: "Developing computer games."
  },
  {
    id: "CSC 308",
    name: "Data Science",
    level: "Undergraduate",
    credits: 3,
    description: "interdisciplinary field that uses scientific methods,algorithms and systems to extract knowledge and insight from structure and unstructure data."
  },
  {
    id: "CSC 304",
    name: "Digital Logic",
    level: "Undergraduate",
    credits: 3,
    description: "Deals with boolean algebra,logic gate,binary."
  },
  {
    id: "MTH 304",
    name: "Number theory and Cryptography",
    level: "Undergraduate",
    credits: 3,
    description: "Deals with encryting and decrypting."
  },
  {
    id: "CSC 302",
    name: "Computer Hardware and Architecture",
    level: "Undergraduate",
    credits: 3,
    description: "Introduction Computer Hardware and Architecture."
  },
];

const CourseList = ({ limit = courses.length }) => {
  const displayedCourses = courses.slice(0, limit);
  
  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Featured Courses</h2>
        {limit < courses.length && (
          <a href="/courses" className="text-csblue hover:underline text-sm">
            View all courses
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {displayedCourses.map((course) => (
          <Card key={course.id} className="card-hover">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{course.name}</h3>
                  <h4 className="text-sm text-gray-600 font-medium">{course.id} • {course.credits} Credits</h4>
                  <p className="text-sm text-gray-700 mt-1">{course.description}</p>
                </div>
                <Badge className="bg-csblue">{course.level}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CourseList;
