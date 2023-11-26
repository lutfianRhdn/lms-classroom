import { Card, CardBody } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import React from 'react'

export default function EmptyModule() {
  return (
    <Card className='flex  flex-row items-center'>
      <Image src='/creativeTeam.png' alt='ilustration' width={200} loading='lazy'/>
      <CardBody>
        <h1 className='text-2xl text-blue-600'>This is where you’ll see updates for this course</h1>
        <p>Use the stream to connect with your class and check for announcements</p>
      </CardBody>
    </Card>
  )
}
