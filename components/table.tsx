'use client'
import React from "react";
import { Table as T, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup, Radio, ButtonGroup, Button } from "@nextui-org/react";
import Link from "next/link";
type Props = {
  headers: string[];
  module: string;
  data: any[];
  uniqueKey: string;
  onDelete: any,
}

export default function Table({ headers, module, data, uniqueKey, onDelete }:Props) {
  return (
    <div className="flex flex-col gap-3">
      <T
        color="default"
        // selectionMode={isMultiple ? "multiple" : "single"}
        aria-label="Example static collection table"
      >
        <TableHeader>
          {headers.map((header, index) => (
            <TableColumn className="text-center" key={index}>{header}</TableColumn>
          ))}
          <TableColumn className="text-center" >Aksi</TableColumn>

        </TableHeader>
        <TableBody>
          {data?.map((row, index) => (
            <TableRow key={index}>
              {headers.map((header, index) => (
                <TableCell className=" text-center" key={index}>{row[header]}</TableCell>
              ))}
              <TableCell >
                <div className="flex gap-2 items-center justify-center ">
                  <Button color="warning" as={Link} href={`/${module}/edit/${row[uniqueKey]}`} >Edit</Button>
                  <Button color="danger" onClick={() => onDelete(row[uniqueKey])} >Delete</Button>
                </div>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </T>
    
    </div>
  );
}
