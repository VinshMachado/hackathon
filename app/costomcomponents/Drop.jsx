import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LuFiles } from "react-icons/lu";

const Drop = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <Card className="w-11/12 h-1/2  border-gray-200 shadow-sm flex justify-center items-center bg-gray-100">
          <CardHeader className="text-black text-3xl">
            <CardTitle>Drop Files</CardTitle>
            <CardDescription className="pl-10">.xls file</CardDescription>
            <div className="pl-11">
              <LuFiles />
            </div>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default Drop;
