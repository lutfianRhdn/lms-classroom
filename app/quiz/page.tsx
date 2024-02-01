"use client"
import React, { useState } from 'react'
import { quiz } from '@/config/data-dummy';
import {
  Table, 
  TableHeader, 
  TableColumn, 
  TableBody, 
  TableRow, 
  TableCell, 
  getKeyValue, 
  Button, 
  useDisclosure, 
  Input, 
  Select, 
  SelectItem
} from "@nextui-org/react";
import { Icon } from '@iconify/react';
import Modal from '@/components/modal';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function page() {
  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  const router = useRouter();
  const [quizForm, setQuizForm] = useState({
    name: '',
    course: '',
    module: '',
    type: '',
    numberQuestion: 0
  })
  const courses = [
    {
      id:1,
      name: 'Course 1'
    },
    {
      id:2,
      name: 'Course 2'
    },
    {
      id:3,
      name: 'Course 3'
    },
  ]
  const questionTypes = [
    {
      id:1,
      name: 'Multiple Choice'
    },
    {
      id:2,
      name: 'Essay'
    },
    {
      id:3,
      name: 'Mixed'
    },
  ]
  const modules = [
    {
      id:1,
      name: 'Data Visualisation'
    },
    {
      id:2,
      name: 'Data Minig'
    },
    {
      id:3,
      name: 'Data Warehousing'
    },
  ]
  const columns = [
    {
      key: "name",
      label: "Quiz Name",
    },
    {
      key: "count_question",
      label: "Number Of Questions",
    },
    {
      key: "type",
      label: "Quiz Type",
    },
    {
      key: "name_course",
      label: "Course",
    },
    {
      key: "updateAt",
      label: "Modify",
    },
  ];
  function handleChange(e:any){
    setQuizForm({
      ...quizForm,
      [e.target.name]: e.target.value
    })
  }
  function handleSubmitQuizManual() {
    const {name, course, type} = quizForm;
    if(!name || !course || !type) return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please fill in all the fields!',
    });
    router.push(`/quiz/create?qname=${name}&course_id=${course}&type=${type}`);
  }
  
  return (
    <section className='p-5 w-screen lg:max-w-6xl lg:mx-auto space-y-5'>
      <header className='bg-white p-4 shadow-md'>
        <h1 className='text-xl font-bold text-dark-blue'>Quiz</h1>
      </header>
      <section className="overflow-x-auto w-full">
        <Table aria-label="Table Quiz" radius='none'>
          <TableHeader columns={columns}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={quiz}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
      <section className='flex gap-3 items-center'>
        {/* GENERATE QUIZ BY AI */}
        <Button 
          size='sm' 
          className='bg-dark-blue text-white font-bold px-6' 
          radius='sm' 
          startContent={<img src="/shinning.png" alt="icon"/>}
          onPress={modal1.onOpen}
        >
          Quiz Generator
        </Button>
        <Modal 
          title='Quiz Generator' 
          isOpen={modal1.isOpen} 
          onOpenChange={modal1.onOpenChange}
          btnActionTitle='Generate'
        >
          <form action="" className='space-y-5'>
            <Input
              name='name'
              placeholder='Insert Your Quiz Name Here'
              label='Quiz Name :'
              variant='bordered'
              labelPlacement='outside'
              radius='sm'
            />
            <div className='flex gap-5'>
              <Select
                name='course'
                variant='bordered'
                label='Course :'
                labelPlacement='outside' 
                radius='sm'
                placeholder='Choose Course'
              >
                {courses.map((course) => (
                  <SelectItem key={course.id} value={course.name}>
                    {course.name}
                  </SelectItem>
                ))}
              </Select>
              <Select
                name='module'
                variant='bordered'
                label='Module :'
                labelPlacement='outside' 
                radius='sm'
                placeholder='Choose Module'
              >
                {modules.map((module) => (
                  <SelectItem key={module.id} value={module.name}>
                    {module.name}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div className='flex gap-5'>
              <Select
                name='type'
                variant='bordered'
                label='Question Type :'
                labelPlacement='outside' 
                radius='sm'
                placeholder='Choose Type'
              >
                {questionTypes.map((type) => (
                  <SelectItem key={type.name} value={type.name}>
                    {type.name}
                  </SelectItem>
                ))}
              </Select>
              <Input
                name='numberQuestion'
                placeholder='Insert Your Number Question'
                label='Number Of Question :'
                variant='bordered'
                labelPlacement='outside'
                radius='sm'
              />
            </div>
            
          </form>
        </Modal>

        {/* CREATE QUIZ MANUAL */}
        <Button 
          size='sm' 
          className='border-dark-blue text-dark-blue px-5' 
          variant='ghost'  
          radius='sm'
          onPress={modal2.onOpen}
        >
          Create Quiz
        </Button>
        <Modal 
          title='Create Quiz' 
          isOpen={modal2.isOpen} 
          onOpenChange={modal2.onOpenChange}
          btnActionTitle='Next'
          onSubmit={handleSubmitQuizManual}
        >
          <form className='space-y-10'>
            <Input
              name='name'
              placeholder='Insert Your Quiz Name Here'
              label='Quiz Name :'
              variant='bordered'
              onChange={handleChange}
              labelPlacement='outside'
              radius='sm'
            />
            <Select
              name='course'
              variant='bordered'
              label='Course :'
              labelPlacement='outside' 
              onChange={handleChange}
              radius='sm'
              placeholder='Choose Course'
            >
              {courses.map((course) => (
                <SelectItem key={course.id} value={course.id}>
                  {course.name}
                </SelectItem>
              ))}
            </Select>
            <Select
              name='type'
              variant='bordered'
              label='Question Type :'
              labelPlacement='outside' 
              onChange={handleChange}
              radius='sm'
              placeholder='Choose Type'
            >
              {questionTypes.map((type) => (
                <SelectItem key={type.name} value={type.name}>
                  {type.name}
                </SelectItem>
              ))}
            </Select>
          </form>
        </Modal>
      </section>
    </section>
  )
}
