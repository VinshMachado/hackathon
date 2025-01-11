import React from "react";

const videocall = () => {
  return (
    <>
      <div className="bg-black text-white p-4 rounded-t-lg flex">
        <h2 className="pl-20 text-xl font-semibold">Call</h2>
      </div>
      <iframe
        src="https://vinishmachado.whereby.com/doconcall130fedf3-316c-4995-8a41-6be7ea4d7b2c?roomKey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWV0aW5nSWQiOiI5NTM0MjczMiIsInJvb21SZWZlcmVuY2UiOnsicm9vbU5hbWUiOiIvZG9jb25jYWxsMTMwZmVkZjMtMzE2Yy00OTk1LThhNDEtNmJlN2VhNGQ3YjJjIiwib3JnYW5pemF0aW9uSWQiOiIzMDM4MzYifSwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5zcnYud2hlcmVieS5jb20iLCJpYXQiOjE3MzY2MTMwMDcsInJvb21LZXlUeXBlIjoibWVldGluZ0hvc3QifQ.uci4-z17LqzPH_cfy8GHAkKiMZmDqwyD8o_wkQAPI3g"
        allow="camera; microphone; fullscreen"
        className="w-full h-[600px]"
      ></iframe>
    </>
  );
};

export default videocall;
