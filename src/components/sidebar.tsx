import React from "react";
import SidebarElement from "@nexaster/components/sidebar-element";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSick } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiNews } from "react-icons/bi";

export default function Sidebar(): React.ReactElement {
  return (
    <aside className="relative bg-blue-500 bg-sidebar w-64 hidden sm:block shadow-xl">
      <div className="p-6">
        <a
          href="#"
          className="text-white text-2xl font-semibold uppercase hover:text-gray-300"
        >
          Good Morning Dr
        </a>
      </div>
      <nav className="text-white text-base font-semibold pt-3">
        <SidebarElement icon={<CgProfile />} text="profil" route={"/doctor"} />
        <SidebarElement
          icon={<MdOutlineSick />}
          text="patients"
          route={"/doctor/patients"}
        />
        <SidebarElement
          icon={<AiOutlineClockCircle />}
          text="program"
          route={""}
        />
        <SidebarElement icon={<BiNews />} text="news" route={""} />
      </nav>
    </aside>
  );
}
