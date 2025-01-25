import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";

const videocall = () => {
  return (
    <>
      <div className="bg-white text-black p-4 rounded-t-lg flex">
        <SidebarTrigger />
        <h2 className="pl-20 text-xl font-semibold">Call</h2>
      </div>
      <iframe
        src="https://vinishmachado.whereby.com/doconcall130fedf3-316c-4995-8a41-6be7ea4d7b2c"
        allow="camera; microphone; fullscreen"
        className="w-full h-[600px]"
      ></iframe>
    </>
  );
};

export default videocall;
