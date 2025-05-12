
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Book, User, Calendar, Bell, Info, Contact, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import logo from './ui/image/Screenshot 2025-05-11 at 20.41 Background Removed.59.png'

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <Info className="h-5 w-5" />, label: "About", path: "/" },
    { icon: <Book className="h-5 w-5" />, label: "Courses", path: "/courses" },
    { icon: <User className="h-5 w-5" />, label: "Faculty", path: "/faculty" },
    { icon: <Bell className="h-5 w-5" />, label: "News", path: "/news" },
    { icon: <Calendar className="h-5 w-5" />, label: "Events", path: "/events" },
    { icon: <Download className="h-5 w-5" />, label: "Timetable", path: "/timetable" },
    { icon: <Contact className="h-5 w-5" />, label: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-csblue text-white shadow-md">
      <div className="flex items-center justify-between px-4 h-16">
        <Link to="/" className="flex items-center">
          <Avatar className="h-10 w-10 mr-2 border-2 border-white">
            <AvatarImage src={logo} alt="CS Logo" />
            <AvatarFallback className="bg-white text-csblue">CS</AvatarFallback>
          </Avatar>
          <span className="font-bold text-xl">UDS-CSS</span>
        </Link>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] bg-white">
            <div className="flex flex-col h-full py-8">
              <div className="flex items-center justify-center mb-6">
                <Avatar className="h-16 w-16 border-2 border-csblue">
                  <AvatarImage src={logo} alt="CS Logo" />
                  <AvatarFallback className="bg-white text-csblue">CS</AvatarFallback>
                </Avatar>
              </div>
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="flex items-center py-3 px-4 rounded-md hover:bg-csgray-light"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mr-3 text-csblue">{item.icon}</span>
                    <span className="font-medium text-csgray-dark">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileNavbar;
