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

const Payment = () => {
  return (
    <div className="h-full w-full bg-gray-50 rounded-sm justify-center items-start flex ">
      <Accordion type="single" collapsible className="w-11/12">
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex items-center justify-center text-green-600">
            Name
          </AccordionTrigger>
          <AccordionContent>
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
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
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
      </Accordion>
    </div>
  );
};

export default Payment;
