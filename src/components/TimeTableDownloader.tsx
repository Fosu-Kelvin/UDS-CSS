
import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';
import { FileText, Download } from 'lucide-react';

// Define the timetable item type
type TimeTableItem = {
  id: number;
  course: string;
  title: string;
  day: string;
  time: string;
  room: string;
  instructor: string;
};

interface TimeTableDownloaderProps {
  data: TimeTableItem[];
}

const TimeTableDownloader: React.FC<TimeTableDownloaderProps> = ({ data }) => {
  // Function to convert timetable data to CSV format
  const convertToCSV = (data: TimeTableItem[]) => {
    // Define CSV headers
    const headers = ['Course', 'Title', 'Day', 'Time', 'Room', 'Instructor'];
    
    // Map data to CSV rows
    const rows = data.map(item => [
      item.course,
      item.title,
      item.day, 
      item.time,
      item.room,
      item.instructor
    ].map(value => `"${value}"`).join(','));
    
    // Combine headers and rows
    return [headers.join(','), ...rows].join('\n');
  };
  
  // Function to generate PDF (in a real app, use a PDF library)
  const generatePDF = () => {
    // This is a mock function - in a real app, use a library like jsPDF
    toast.success('Processing PDF download', {
      description: 'Your timetable will download shortly'
    });
    
    setTimeout(() => {
      toast('PDF Download Ready', {
        description: 'In a production app, the PDF would download automatically.'
      });
    }, 1500);
  };
  
  // Function to download CSV
  const downloadCSV = () => {
    const csvContent = convertToCSV(data);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    // Set link attributes
    link.setAttribute('href', url);
    link.setAttribute('download', 'cs_timetable.csv');
    link.style.visibility = 'hidden';
    
    // Append to document, click and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success('Timetable downloaded as CSV', {
      description: 'You can open this file in Excel or Google Sheets'
    });
  };
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4">
      <Button 
        variant="outline"
        className="w-full flex items-center justify-center" 
        onClick={downloadCSV}
      >
        <Download className="mr-2 h-4 w-4" />
        Download as CSV
      </Button>
      
      <Button 
        className="w-full flex items-center justify-center"
        onClick={generatePDF}
      >
        <FileText className="mr-2 h-4 w-4" />
        Download as PDF
      </Button>
    </div>
  );
};

export default TimeTableDownloader;
