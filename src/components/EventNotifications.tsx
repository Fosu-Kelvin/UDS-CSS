
import React, { useEffect, useState } from 'react';
import { toast } from "@/components/ui/sonner";
import { Bell, Calendar } from 'lucide-react';

// Upcoming event notification type
type EventNotification = {
  id: number;
  title: string;
  date: string;
  timeUntil: string;
};

// Sample upcoming events (in a real app, this would come from an API or database)
const upcomingEvents: EventNotification[] = [
  {
    id: 1,
    title: "AI Research Symposium",
    date: "June 15, 2023",
    timeUntil: "in 3 days"
  },
  {
    id: 2,
    title: "Industry Career Fair",
    date: "June 28, 2023",
    timeUntil: "in 2 weeks"
  }
];

// Component to show notifications for upcoming events
const EventNotifications: React.FC = () => {
  const [notificationsShown, setNotificationsShown] = useState<boolean>(false);

  // Show notifications for upcoming events when component mounts
  useEffect(() => {
    if (!notificationsShown) {
      // Stagger notifications with a delay
      upcomingEvents.forEach((event, index) => {
        setTimeout(() => {
          showEventNotification(event);
        }, index * 3000); // Show each notification 3 seconds apart
      });
      setNotificationsShown(true);
    }
  }, [notificationsShown]);

  const showEventNotification = (event: EventNotification) => {
    toast(
      <div className="flex items-start gap-2">
        <Bell className="h-4 w-4 mt-1 text-csblue" />
        <div>
          <p className="font-medium">Upcoming Event: {event.title}</p>
          <p className="text-sm text-gray-500">
            <span className="flex items-center gap-1 mt-1">
              <Calendar className="h-3 w-3" />
              {event.date} ({event.timeUntil})
            </span>
          </p>
        </div>
      </div>,
      {
        duration: 5000,
        action: {
          label: "View Details",
          onClick: () => window.location.href = "/events"
        }
      }
    );
  };

  return null; // This is a functional component, doesn't render anything
};

export default EventNotifications;
