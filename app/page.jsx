import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
        <nav className="bg-white-600 text-black p-4 flex justify-between items-center">
          <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-2xl font-bold">
              Synergetic Health
            </a>
            <ul className="flex space-x-7">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/* About Section */}
      <div className="flex wrap justify-center w-full h-auto bg-gradient-to-r from-blue-700 to-blue-400  items-center">
        <img src="/mainlogo.jpeg" className="h-64 w-64 rounded-full m-6" />
        <h1 className="text-8xl ml-20 text-white">Synergetic Health</h1>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <Link href="./doctor">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mb-4 hover:bg-blue-700">
            Doctors Login
          </button>
        </Link>
        <Link href="./patient/ai">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700">
            Patient Login
          </button>
        </Link>
      </div>
      <div
        id="about"
        className="flex flex-col justify-center items-center mt-10 w-full h-auto bg-blue-100 p-8 rounded-lg shadow-lg animate-appear"
      >
        <h1 className="text-4xl font-bold text-blue-700 mb-4">About</h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl">
          Synergetic Health is your all-in-one solution for managing healthcare effortlessly.
          It offers seamless access to insurance policies, ensuring you stay covered without the hassle. 
          Consult doctors via secure video calls, anytime, from the comfort of your home. 
          Leverage advanced AI medical assistance for quick and accurate health guidance and access to mental health counselors to support your emotional well-being and balance. 
          Find and connect with hospitals easily for appointments and emergency needs. The app ensures all your healthcare data is organized and accessible in one place. 
          With Synergetic Health, you eliminate the complexity of managing healthcare services. 
          Designed to simplify, it helps you focus on what matters most your health and well-being.
          Empower yourself with smarter, easier healthcare today!
        </p>
        <p className="text-lg text-gray-700 text-center max-w-2xl mt-4">
          What makes us unique is our integration of cutting-edge AI technology.
          Our AI tools assist in detecting health conditions by analyzing your
          symptoms and medical history. These insights help doctors provide
          accurate diagnoses and personalized treatment plans.
        </p>
        <p className="text-lg text-gray-700 text-center max-w-2xl mt-4">
     
          Our mission at Synergetic Health is to revolutionize healthcare accessibility by integrating advanced technology and personalized services.
          We strive to simplify healthcare management, ensuring everyone can access quality medical assistance, mental health support, and essential services effortlessly. 
          By fostering convenience and trust, we aim to empower individuals to lead healthier, stress-free lives.
        </p>
      </div>

      {/* Features Section */}
      <div id="features" className="container mx-auto mt-10 p-5">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center border-4 border-blue-800">
            <img
              src="/laptop.png"
              alt="Video Call"
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-700 mb-2">
              Video Call with Doctors
            </h3>
            <p className="text-gray-700 text-center">
              Connect with certified doctors through secure video consultations
              from the comfort of your home.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center border-4 border-blue-800">
            <img
              src="/mind-health.png"
              alt="AI Assistance"
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-700 mb-2">
              AI Medical Assistance
            </h3>
            <p className="text-gray-700 text-center">
              Our AI tools assist in detecting health conditions by analyzing
              your symptoms and medical history.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center border-4 border-blue-800">
            <img
              src="/donation.png"
              alt="Donation Fund"
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-700 mb-2">
              Donation Fund
            </h3>
            <p className="text-gray-700 text-center">
              Support those who can't afford healthcare by contributing to our
              donation fund.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center border-4 border-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="green"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-[100px]"
            >
              <path d="M12 14c4.418 0 8-1.79 8-4V8c0-2.21-3.582-4-8-4S4 5.79 4 8v2c0 2.21 3.582 4 8 4z" />
              <path d="M8 13v2c0 1.657 1.79 3 4 3s4-1.343 4-3v-2" />
              <path d="M12 20v2m-4-1h8" />
            </svg>
            <h3 className="text-2xl font-bold text-blue-700 mb-2">counselor</h3>
            <p className="text-gray-700 text-center">
              We have one of the finest counselors in city
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center border-4 border-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="green"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="mb-4"
            >
              <path d="M12 2L4.5 6.5v11l7.5 4.5 7.5-4.5v-11L12 2z" />
              <path d="M9 12h6" />
              <path d="M12 9v6" />
            </svg>
            <h3 className="text-2xl font-bold text-blue-700 mb-2">
              Hospital axis
            </h3>
            <p className="text-gray-700 text-center">
              Get easy access to hospital facilities{" "}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center border-4 border-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="green"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-[100px] mb-4"
            >
              <path d="M12 2l7 4v6c0 5.25-3 8-7 10-4-2-7-4.75-7-10V6l7-4z" />
              <path d="M10 11h4m-2-2v4" />
            </svg>
            <h3 className="text-2xl font-bold text-blue-700 mb-2">
              Helth Insurance
            </h3>
            <p className="text-gray-700 text-center">
              We support health insurence
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
