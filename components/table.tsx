'use client'
import React from "react";
import { Table as T, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup, Radio, ButtonGroup, Button } from "@nextui-org/react";


export default function Table({ headers, data }: { headers: string[], data: any[] }) {

  return (
    <div className="flex flex-col gap-3">
      <T
        color="default"
        // selectionMode="multiple"
        aria-label="Example static collection table"
      >
        <TableHeader>
          {headers.map((header, index) => (
            <TableColumn className="text-center" key={index}>{header}</TableColumn>
          ))}
          <TableColumn className="text-center" >Aksi</TableColumn>

        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {headers.map((header, index) => (
                <TableCell className=" text-center" key={index}>{row[header]}</TableCell>
              ))}
              <TableCell >
                <div className="flex gap-2 items-center justify-center ">
                <Button color="warning" >Edit</Button>
                  <Button color="danger" >Delete</Button>
                </div>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </T>
    
    </div>
  );
}
