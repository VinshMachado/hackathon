import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Payment = () => {
  return (
    <div className="h-full w-full bg-gray-50 rounded-sm justify-center items-start flex ">
      <Accordion type="single" collapsible className="w-11/12">
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex items-center justify-center text-green-600">
            NAME
          </AccordionTrigger>
          <AccordionContent>
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">discription</TableHead>
                  <TableHead className="pl-10">qty</TableHead>
                  <TableHead>unit cost</TableHead>
                  <TableHead className="text-right">tax</TableHead>
                  <TableHead className="text-right">C.GST</TableHead>
                  <TableHead className="text-right">S.GST</TableHead>
                  <TableHead className="text-right">Basic</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>
                    <Button className="h-5  w-5 bg-gray-50 shadow-none text-black hover:bg-gray-200">
                      <FaMinus />
                    </Button>
                    Paid{" "}
                    <Button className="h-5  w-5 bg-gray-50 shadow-none text-black hover:bg-gray-200">
                      <FaPlus />
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button className="h-5  w-5 bg-gray-50 shadow-none text-black hover:bg-gray-200">
                      <FaMinus />
                    </Button>
                    Paid{" "}
                    <Button className="h-5  w-5 bg-gray-50 shadow-none text-black hover:bg-gray-200">
                      <FaPlus />
                    </Button>
                  </TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
        <div>
          {" "}
          <Button className="pl-5 mt-5">ADD</Button>
        </div>
      </Accordion>
    </div>
  );
};

export default Payment;
