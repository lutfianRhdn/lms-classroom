import { Answer, Quiz } from "@/types/quiz";
import getResponse from "@/utils/getResponse";
import getSessionUser from "@/utils/session";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
export async function POST(req: Request, { params }: any) {
  const session = await getSessionUser();
  const answers : Answer[] = await req.json();
  const { id } = params;
  if (!answers) return getResponse(null, 'answers is required', 400);
  const isAlreadyAnswered = await prisma.user_quiz.findFirst({
    where: {
      user_id:session?.id,
      quiz_id: +id
    }
  })
  if (isAlreadyAnswered) return getResponse(null, "user already answered this quiz", 400)
  const quiz = await prisma.quiz.findUnique({
    where: {
      id: +id
    }
  }) ;
  if (!quiz) return getResponse(null, 'quiz not found', 400);
  const answerKeys: Array<any> | any = quiz.answer;
  const question = quiz?.question as [] || []
  const questionLength :number =question.length
  let countTrueAnswer = 0;
  answerKeys.forEach((answerKey: Answer,index:number) => {
    if (answerKey.title === answers[index].title) {
      countTrueAnswer = answerKey.answer === answers[index].answer ? 1 : 0
    }
  });
  const score = countTrueAnswer / questionLength * 100

  const quizResult = await prisma.user_quiz.create({
    data: {      
      quiz_id: +id,
      user_id: session?.id as number,
      answer: answers as any ,
      score
    }
  })

  return getResponse(quizResult,"success answered a quiz",200)
}
export async function PUT(req: Request, { params }: any) {
  const { id } = params;
  const { course_id, name, question, answer }: Quiz = await req.json();
  if (!course_id || !name || !question || !answer) return getResponse(null, 'course_id,name,question,answer is required', 400);
  if (question.length !== answer.length) return getResponse(null, 'question and answer must be same length', 400);
  const course = await prisma.course.findUnique({
    where: {
      id: +course_id
    }
  })
  if (!course) return getResponse(null, 'course not found', 400);
  const quiz = await prisma.quiz.update({
    where: {
      id: +id
    },
    data: {
      course_id: +course_id,
      name,
      question,
      answer,
    }
  })
  return getResponse(quiz, 'success get Update quiz', 200);
}
export async function DELETE(req: Request, { params }: any) {
  const { id } = params;
  await prisma.quiz.delete({
    where: {
      id: +id
    }
  })
  return getResponse(null, 'success delete quiz', 200);
} 

export async function GET(req: Request, { params }: any) {
  const { id } = params;
  const session = await getSessionUser();
  const quiz = await prisma.quiz.findUnique({
    where: {
      id: +id
    },
    include: {
      user_quiz: {
        where: {
          user_id: session?.id
        }
      },
    },
  })
  return getResponse(quiz, 'success get quiz', 200);
}
