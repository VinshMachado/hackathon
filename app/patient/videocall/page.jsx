import React from "react";

const videocall = () => {
  return (
    <>
      <div className="bg-black text-white p-4 rounded-t-lg flex">
        <h2 className="pl-20 text-xl font-semibold">Call</h2>
      </div>
      <iframe
        src="https://vinishmachado.whereby.com/messiisthegoat0d9ae424-596c-4f4b-8ca7-25a6a37badac"
        allow="camera; microphone; fullscreen"
        className="w-full h-[600px]"
      ></iframe>
    </>
  );
};

export default videocall;
