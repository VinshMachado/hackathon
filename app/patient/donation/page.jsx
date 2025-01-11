"use client";
import React, { useCallback, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";

const donation = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    upiId: "",
    amount: "",
  });
  const [data, setdata] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const Insertdata = async () => {
    try {
      console.log(formData);
      const response = await axios.post(
        "https://hackathonbackend-03v1.onrender.com/donation/insert",
        {
          name: formData.name,
          desc: formData.description,
          upiId: formData.upiId,
          amount: formData.amount,
          qrcode: formData.amount, // Ensure this is intentional
        }
      );
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const getdata = async () => {
    try {
      const responce = await axios.get(
        "https://hackathonbackend-03v1.onrender.com/donation/get"
      );
      console.log(responce.data);
      setdata(responce.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div className="w-full h-[600px] sm:h-[500px] flex items-center justify-center p-10 bg-green-400">
        <Carousel className="h-full w-full">
          <CarouselContent className="h-full">
            {data.map((data) => {
              console.log(data.name);
              return (
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="max-w-sm w-full bg-white rounded-lg shadow-lg p-4 space-y-4">
                    {/* Profile Picture */}
                    <div className="flex justify-center">
                      <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                      />
                    </div>

                    {/* Name */}
                    <h2 className="text-xl font-semibold text-center text-black">
                      {data.name}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-center">{data.desc}</p>

                    {/* Amount */}
                    <div className="flex justify-center">
                      <span className="text-lg font-bold text-blue-600">
                        ₹{data.amount}
                      </span>
                    </div>

                    {/* QR Code Image */}
                    <div className="flex justify-center">
                      <img
                        src={data.qrcode}
                        alt="QR Code"
                        className="w-32 h-32 object-contain"
                      />
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
      <div>
        <AlertDialog>
          <AlertDialogTrigger>
            <Button className="m-10 bg-green-400 shadow-lggit ">
              Raise Funds?
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Your Name</AlertDialogTitle>
              <input
                name="name"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <AlertDialogTitle>Description</AlertDialogTitle>
              <input
                name="description"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <AlertDialogTitle>Your UPI ID</AlertDialogTitle>
              <input
                name="upiId"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <AlertDialogTitle>Amount</AlertDialogTitle>
              <input
                name="amount"
                onChange={handleChange}
                className="p-2 border rounded"
              />
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={Insertdata}>Submit</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};

export default donation;
