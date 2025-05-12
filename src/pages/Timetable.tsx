
import React, { useState } from 'react';
import MobileNavbar from '@/components/MobileNavbar';
import PageHeader from '@/components/PageHeader';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Calendar } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { useMediaQuery } from '@/hooks/useMediaQuery';
import TimeTableDownloader from '@/components/TimeTableDownloader';

// Sample timetable data (in a real app, this would come from an API)
const timetableData = [
  { id: 1, course: "CSC308", title: "Introduction Data Science", day: "Monday", time: "10:00 - 11:30", room: "LT-7", instructor: "Mr. Saa-Dittoh Francis" },
  { id: 2, course: "MTH304", title: "Number theory and cryptography", day: "Monday", time: "13:00 - 14:30", room: "LT-7", instructor: "Mr.Iddrisu Mohammed Katali" },
  { id: 3, course: "CSC306", title: "Mobile and Game development", day: "Tuesday", time: "09:00 - 10:30", room: "G-Hall", instructor: "Mphil.Abdul-Wakil Yakubu Iddrisu" },
  { id: 4, course: "CSC304", title: "Digital Logic", day: "Tuesday", time: "14:00 - 15:30", room: "LT-7", instructor: "Dr. Alhassan Salamudeen" },
  { id: 5, course: "CSC302", title: "Computer Hardware and Architecture", day: "Wednesday", time: "11:00 - 12:30", room: "G-Hall", instructor: "Prof.Alhassan Abdul-Barik" },
  { id: 7, course: "PHY310", title: "Electricity and Magnetism", day: "Friday", time: "13:00 - 14:30", room: "G-Hall", instructor: "Dr. Mathew Amekpewu" },
  { id: 8, course: "CSC310", title: "Game Design and Programmng", day: "Thursday", time: "15:00 - 16:30", room: "G-Hall", instructor: "Mphil.Abdul-Wakil Yakubu Iddrisu" },
  
];

const Timetable = () => {
  const [selectedDay, setSelectedDay] = useState<string>("All");
  const isDesktop = useMediaQuery("(min-width: 768px)");
  
  // Filter timetable based on selected day
  const filteredTimetable = selectedDay === "All" 
    ? timetableData 
    : timetableData.filter(item => item.day === selectedDay);
  
  const days = ["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  // Component that conditionally renders Dialog on desktop and Drawer on mobile
  const DownloadDialog = ({ children }: { children: React.ReactNode }) => {
    return isDesktop ? (
      <Dialog>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Download Timetable</DialogTitle>
            <DialogDescription>Select a format to download the timetable</DialogDescription>
          </DialogHeader>
          <TimeTableDownloader data={filteredTimetable} />
        </DialogContent>
      </Dialog>
    ) : (
      <Drawer>
        <DrawerTrigger asChild>
          {children}
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Download Timetable</DrawerTitle>
            <DrawerDescription>Select a format to download the timetable</DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-4">
            <TimeTableDownloader data={filteredTimetable} />
          </div>
        </DrawerContent>
      </Drawer>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <MobileNavbar />
      
      <div className="pt-16">
        <PageHeader 
          title="Class Timetable" 
          description="View and download the CS department class schedule"
        />
        
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
              {days.map((day) => (
                <Button
                  key={day}
                  variant={selectedDay === day ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDay(day)}
                >
                  {day}
                </Button>
              ))}
            </div>
            
            <DownloadDialog>
              <Button className="ml-auto">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </DownloadDialog>
          </div>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <Table>
              <TableCaption>
                {selectedDay === "All" ? "Complete Class Schedule" : `${selectedDay} Class Schedule`}
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead className="hidden md:table-cell">Day</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead className="hidden md:table-cell">Room</TableHead>
                  <TableHead className="hidden md:table-cell">Instructor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTimetable.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.course}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell className="hidden md:table-cell">{item.day}</TableCell>
                    <TableCell>{item.time}</TableCell>
                    <TableCell className="hidden md:table-cell">{item.room}</TableCell>
                    <TableCell className="hidden md:table-cell">{item.instructor}</TableCell>
                  </TableRow>
                ))}
                {filteredTimetable.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-4">No classes scheduled for this day.</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            <p className="flex items-center justify-center gap-1">
              <Calendar className="h-4 w-4" />
              Last updated: May 10, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timetable;
