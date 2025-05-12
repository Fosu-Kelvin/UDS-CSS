
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Info, Book, User } from "lucide-react";

const DepartmentInfo = () => {
  const departmentStats = [
    { icon: <Book className="h-5 w-5" />, label: "Courses", value: "65+" },
    { icon: <User className="h-5 w-5" />, label: "Faculty", value: "300+" },
    { icon: <Info className="h-5 w-5" />, label: "Established", value: "2022" },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">Department Overview</h2>
      
      <Card className="mb-4">
        <CardContent className="pt-6">
          <p className="text-gray-700">
            The Computer Science Department is committed to excellence in research, teaching, and 
            service. We offer comprehensive programs from undergraduate to doctoral levels, focusing 
            on theoretical foundations and practical applications of computing.
          </p>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-3 gap-2">
        {departmentStats.map((stat, index) => (
          <Card key={index} className="card-hover bg-white">
            <CardContent className="p-4 text-center flex flex-col items-center justify-center">
              <div className="text-csblue mb-2">{stat.icon}</div>
              <div className="font-bold text-xl text-csgold-dark">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default DepartmentInfo;
