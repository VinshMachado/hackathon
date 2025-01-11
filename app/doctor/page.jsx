import React from "react";

const videocall = () => {
  return (
    <>
      <div className="bg-black text-white p-4 rounded-t-lg flex">
        <h2 className="pl-20 text-xl font-semibold">Call</h2>
      </div>
      <iframe
        src="https://vinishmachado.whereby.com/messiisthegoat0d9ae424-596c-4f4b-8ca7-25a6a37badac?roomKey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWV0aW5nSWQiOiI5NTI1ODEwMiIsInJvb21SZWZlcmVuY2UiOnsicm9vbU5hbWUiOiIvbWVzc2lpc3RoZWdvYXQwZDlhZTQyNC01OTZjLTRmNGItOGNhNy0yNWE2YTM3YmFkYWMiLCJvcmdhbml6YXRpb25JZCI6IjMwMzgzNiJ9LCJpc3MiOiJodHRwczovL2FjY291bnRzLnNydi53aGVyZWJ5LmNvbSIsImlhdCI6MTczNjQzNDM0Nywicm9vbUtleVR5cGUiOiJtZWV0aW5nSG9zdCJ9.o__8l_dh5ayu9E1pRQWFpQYW7DyS5XghRzid96Gy4O8"
        allow="camera; microphone; fullscreen"
        className="w-full h-[600px]"
      ></iframe>
    </>
  );
};

export default videocall;
