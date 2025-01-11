import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* About Section */}
      <div className="flex wrap justify-start w-full h-auto bg-gradient-to-r from-green-700 to-green-400">
        {/* Left Section */}
        <div className="flex flex-col justify-center w-100 h-100 p-10">
          <div className="ml-10">
            <div className=" flex flex-col bg-green-900 h-100 boder-4 border-green-800  rounded-lg shadow-lg p-5 justify-cener align-centers animate-fadeInUp ">
              <img src="/health-call.png" alt="logo" className="w-70 h-60" />
              <h1 className="text-white text-5xl font-bold">DocOnCall</h1>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-wrap justify-center items-center ml-10">
          <div className="max-w-max h-auto flex flex-col items-center p-4  delay-25">
            <img
              src="pexels-shvetsa-4225881.jpg"
              alt="yoga"
              className="w-50 h-64 mb-20 mr-3 border-4 border-green-800 rounded-lg shadow-lg"
            />
            <img
              src="/pexels-mariya-b-555701080-30146897.jpg"
              alt="online"
              className="w-50 h-64 -ml-1 border-4 border-green-800 rounded-lg shadow-lg"
            />
          </div>
          <div className="max-w-max h-auto flex flex-col items-center justify-center m-5  delay-50">
            <img
              src="/doctorw.png"
              alt="doctor"
              className="w-30 h-40 mb-10 ml-3 border-green-800 rounded-lg fil "
            />
            <img
              src="/pexels-mirdental-network-34165767-7074380.jpg"
              alt="doctor"
              className="w-50 h-64 border-4 border-green-800 mr-5 rounded-lg shadow-lg"
            />
            <img
              src="/stethoscopew.png"
              alt="doctor"
              className="w-30 h-40 mt-10 mr-2 border-green-800 rounded-lg  "
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center">
          <div className="max-w-max h-auto flex flex-col items-center p-4 ">
            <img
              src="/pexels-prasanthinturi-17799779.jpg"
              alt="yoga"
              className="w-50 h-64 mb-20 mr-3 border-4 border-green-800 rounded-lg shadow-lg"
            />
            <img
              src="/pexels-rihan-ishan-das-739500-2519332.jpg"
              alt="online"
              className="w-50 h-64 -ml-1 border-4 border-green-800 rounded-lg shadow-lg"
            />
          </div>
          <div className="max-w-max h-auto flex flex-col items-center justify-center m-5 ">
            <img
              src="/hospitalw.png"
              alt="doctor"
              className="w-30 h-40 mb-10 ml-3 border-green-800 rounded-lg"
            />
            <img
              src="/pexels-karolina-grabowska-7195112.jpg"
              alt="doctor"
              className="w-50 h-64 border-4 border-green-800 mr-5 rounded-lg shadow-lg"
            />
            <img
              src="/white heart.png"
              alt="doctor"
              className="w-30 h-40 mt-10 mr-2 border-green-800 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <Link href="./doctor">
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full mb-4 hover:bg-green-700">
            Doctors Login
          </button>
        </Link>
        <Link href="./patient/ai">
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700">
            Patient Login
          </button>
        </Link>
      </div>
      <div
        id="about"
        className="flex flex-col justify-center items-center mt-10 w-full h-auto bg-green-100 p-8 rounded-lg shadow-lg animate-appear"
      >
        <h1 className="text-4xl font-bold text-green-700 mb-4">About</h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl">
          At DocOnCall, we make healthcare accessible by connecting patients
          with certified doctors through secure video consultations. Whether you
          need expert advice or quick assistance, you can now get professional
          medical care from the comfort of your home.
        </p>
        <p className="text-lg text-gray-700 text-center max-w-2xl mt-4">
          What makes us unique is our integration of cutting-edge AI technology.
          Our AI tools assist in detecting health conditions by analyzing your
          symptoms and medical history. These insights help doctors provide
          accurate diagnoses and personalized treatment plans.
        </p>
        <p className="text-lg text-gray-700 text-center max-w-2xl mt-4">
          Our mission is to break barriers to healthcare, enhance the quality of
          care through innovation, and prioritize the well-being of every
          patient. With DocOnCall, you get reliable and compassionate
          healthcare, anytime and anywhere.
        </p>
      </div>

      {/* Features Section */}
      <div id="features" className="container mx-auto mt-10 p-5">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center border-4 border-green-800">
            <img
              src="/laptop.png"
              alt="Video Call"
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              Video Call with Doctors
            </h3>
            <p className="text-gray-700 text-center">
              Connect with certified doctors through secure video consultations
              from the comfort of your home.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center border-4 border-green-800">
            <img
              src="/mind-health.png"
              alt="AI Assistance"
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              AI Medical Assistance
            </h3>
            <p className="text-gray-700 text-center">
              Our AI tools assist in detecting health conditions by analyzing
              your symptoms and medical history.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center border-4 border-green-800">
            <img
              src="/donation.png"
              alt="Donation Fund"
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              Donation Fund
            </h3>
            <p className="text-gray-700 text-center">
              Support those who can't afford healthcare by contributing to our
              donation fund.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="container mx-auto mt-10 p-5">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-5 text-blue-800">
            Contact Us
          </h2>
          <div className="flex justify-center items-center">
            <img
              src="/GitHub_Invertocat_Dark.png"
              href="#"
              alt="git"
              className="w-10 mb-10"
            />
          </div>
          <p className="mb-10 text-gray-700">
            Get in touch with us for more information.
          </p>
        </div>
      </div>
    </div>
  );
}
