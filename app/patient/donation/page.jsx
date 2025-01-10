import React from "react";
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

const donation = () => {
  return (
    <div className="w-full h-[600px] sm:h-[400px] bg-gray-500">
      <Carousel className="h-full">
        <CarouselContent className="h-full">
          <CarouselItem className="flex items-center justify-center h-full text-white text-lg bg-gray-700">
            hello
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center h-full text-white text-lg bg-gray-800">
            hello
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center h-full text-white text-lg bg-gray-900">
            hello
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
      </Carousel>
      <div>
        <AlertDialog>
          <AlertDialogTrigger>
            <Button className="m-10">Raise Funds?</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Your Name</AlertDialogTitle>
              <AlertDialogTitle>Your UPI ID</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default donation;
