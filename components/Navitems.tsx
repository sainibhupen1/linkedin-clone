import React from "react";
import {
  Home,
  Users,
  BriefcaseBusiness,
  MessageCircleMore,
  Bell,
} from "lucide-react";
import Link from "next/link";

type NAVITEMS = {
  src: string;
  icon: JSX.Element;
  text: string;
};

const navItems: NAVITEMS[] = [
  {
    src: "/home",
    icon: <Home />,
    text: "Home",
  },
  {
    src: "/networks",
    icon: <Users />,
    text: "My Network",
  },
  {
    src: "/job",
    icon: <BriefcaseBusiness />,
    text: "jobs",
  },
  {
    src: "/message",
    icon: <MessageCircleMore />,
    text: "Messaging",
  },
  {
    src: "/notification",
    icon: <Bell />,
    text: "Notification",
  },
];

const Navitems = () => {
  return (
    <div className="flex gap-8">
      {navItems.map((navItem, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer text-[#666666] hover:text-black"
          >
            <span>{navItem.icon}</span>
            <Link className="text-xs" href={navItem.src}>
              {navItem.text}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Navitems;
