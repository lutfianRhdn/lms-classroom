import { Prisma } from "@prisma/client";
import { JsonArray, JsonObject } from "@prisma/client/runtime/library";

export interface Questions {
  title: string;
  choices: string[];
}
export interface Answer {
  answer: string;
  title: string;
}
export interface Quiz {
  course_id: string;
  name: string;
  question: Questions[]| any ;
  answer: Answer[]|any;
}