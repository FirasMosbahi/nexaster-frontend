import React from "react";
import Sidebar from "@nexaster/components/sidebar";
import Navbar from "@nexaster/components/navbar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      <div className="flex-1 bg-white flex flex-col">
        <Navbar />
        {children}
      </div>
    </>
  );
}
