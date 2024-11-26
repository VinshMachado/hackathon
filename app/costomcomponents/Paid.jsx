import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CiEdit } from "react-icons/ci";

import { Button } from "@/components/ui/button";

const Paid = () => {
  return (
    <div className="h-full w-full bg-gray-50 rounded-sm justify-center items-start flex pt-10">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">discription</TableHead>
            <TableHead>qty</TableHead>
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
            <TableCell>Paid </TableCell>
            <TableCell>Credit Card </TableCell>
            <TableCell className="text-right text-red-600">$250.00</TableCell>
            <TableCell className="text-right text-red-600">$250.00</TableCell>
            <TableCell className="text-right text-red-600">$250.00</TableCell>
            <TableCell className="text-right text-red-600">$250.00</TableCell>
            <TableCell className="text-right text-red-600">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Paid;
