'use client';
import React,{useEffect, useState} from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Button} from "@nextui-org/react";
import NextLink from 'next/link';
import { quizResult } from '@/config/data-dummy'
import fetchApi from '@/utils/fetchApi';
import { showFormattedDate } from '@/utils/timeStamp';
export default function page({params: {id}}: {params: {id: string}}) {
  const [data,setData] = useState([])
  async function getQuiz() {
    const res = await fetchApi(`/quiz/${id}`, 'GET')
    return res.data.user_quiz
  }
  useEffect(() => {
    getQuiz().then((res) =>{
      setData(res)
    })
  },[])
  const columns = ['createdAt','score']
  const rows = data
  return (
    <section className='m-4 space-y-3'>
      <h1 className='text-lg'>Summary of your attempts</h1>
      <Table aria-label='table quiz detail'>
        <TableHeader>
          {columns.map((column) =>
            <TableColumn key={column}>{column}</TableColumn>
          )}
        </TableHeader>
        <TableBody>
          {rows.map((row) =>{
            if (row.createdAt) row.createdAt = showFormattedDate(row.createdAt)
            return (
            <TableRow key={row.id}>
              {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
            </TableRow>
          )})}
        </TableBody>
      </Table>
      <NextLink href={`/`} className='flex justify-center'><Button color='primary'>Back Home</Button></NextLink>
    </section>
  )
}
