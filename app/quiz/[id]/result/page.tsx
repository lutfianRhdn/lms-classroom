'use client';
import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Button} from "@nextui-org/react";
import NextLink from 'next/link';
import { quizResult } from '@/config/data-dummy'
export default function page() {
  const columns = ['quizName','createdAt','score']
  const rows = quizResult
  return (
    <section className='m-4 space-y-3'>
      <h1 className='text-lg'>Summary of your attempts</h1>
      <Table>
        <TableHeader>
          {columns.map((column) =>
            <TableColumn key={column}>{column}</TableColumn>
          )}
        </TableHeader>
        <TableBody>
          {rows.map((row) =>
            <TableRow key={row.id}>
              {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <NextLink href={`/`} className='flex justify-center'><Button color='primary'>Back Home</Button></NextLink>
    </section>
  )
}
