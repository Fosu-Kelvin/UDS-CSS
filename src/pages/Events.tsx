
import React from 'react';
import MobileNavbar from '@/components/MobileNavbar';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const events = [
  {
    id: 1,
    title: "AI Research Symposium",
    date: "June 15, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Computer Science Building, Room 105",
    type: "Research"
  },
  {
    id: 2,
    title: "Industry Career Fair",
    date: "June 28, 2023",
    time: "1:00 PM - 5:00 PM",
    location: "University Center, Main Hall",
    type: "Career"
  },
  {
    id: 3,
    title: "Senior Project Presentations",
    date: "July 5, 2023",
    time: "9:00 AM - 12:00 PM",
    location: "Computer Science Building, Auditorium",
    type: "Academic"
  }
];

const Events = () => {
  const handleEventClick = (event: typeof events[0]) => {
    toast("Event Selected", {
      description: `You selected the ${event.title} on ${event.date}`,
      action: {
        label: "Add to Calendar",
        onClick: () => toast.success("Added to your calendar")
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <MobileNavbar />
      
      <div className="pt-16">
        <PageHeader 
          title="Upcoming Events" 
          description="Join us for these exciting department events"
        />
        
        <div className="container max-w-md mx-auto px-4">
          <div className="grid grid-cols-1 gap-4 mb-8">
            {events.map((event) => (
              <Card 
                key={event.id} 
                className="card-hover cursor-pointer"
                onClick={() => handleEventClick(event)}
              >
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold">{event.title}</h3>
                      <Badge className="bg-csblue">{event.type}</Badge>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-csblue" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">{event.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
