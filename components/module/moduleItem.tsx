"use client";
import React from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { Image } from '@nextui-org/image';
import FileIcon from '@/app/assets/fileIcon';
export default function ModuleItem({module}:any) {
  const { title,createAt } = module || {};
  return (
    <Card className="flex gap-3 flex-row py-2 px-4 hover:scale-105 cursor-pointer">
      <div className='rounded-3xl bg-blue-500 flex justify-center items-center p-2'>
        <FileIcon/>
      </div>
      <div className="flex flex-col">
        <p className="text-md">{title}</p>
        <p className="text-small text-default-500">{createAt}</p>
      </div>
    </Card>
  )
}
