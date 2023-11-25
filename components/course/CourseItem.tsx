"use client";

import React from "react";
import {Card, CardFooter, CardBody} from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export const CourseItem = ({course}:any) => {
  const { title } = course || {}; 
	return (
		<Card className="py-4">
      <CardBody className="py-0 overflow-visible">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src='/liquid-cheese.svg'
          width={270}
        />
      </CardBody>
      <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
        {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
        {/* <small className="text-default-500">12 Tracks</small> */}
        <h4 className="font-bold text-large">{title}</h4>
      </CardFooter>
    </Card>
	);
};