"use client";
import React, { useState } from 'react';
import { Input } from '@nextui-org/input';
import { Switch } from '@nextui-org/switch';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { faXmark, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2';

interface QuizProps {
  courseId: any;
  quizName: string;
  onSubmit: any;
  type: string;
}

interface Question {
  title: string;
  choices: string[];
  isMultiple: boolean;
}

interface Answer {
  title: string;
  answer: string[];
}

interface QuizData {
  course_id: string;
  name: string;
  question: Question[];
  answer: Answer[];
  type: string;
}

export const QuizCreator = ({ courseId,quizName,onSubmit, type}:QuizProps) => {
  const [questions, setQuestions] = useState<Question[]>([{ title: '', choices: ['', '', '', ''], isMultiple:false }]);
  const [answers, setAnswers] = useState<Answer[]>([{ title: '', answer: [] }]);
  
  const handleQuestionChange = (index: number, title: string, choices: string[], isMultiple:boolean) => {
    const newQuestions = [...questions];
    newQuestions[index] = { title, choices, isMultiple};
    setQuestions(newQuestions);
  };

  const handleAnswerChange = (index: number, title: string, answer: string[]) => {
    const newAnswers = [...answers];
    newAnswers[index] = { title, answer};
    setAnswers(newAnswers);
  };
  const updateAnswer = (questionIndex: number, choice: string) => {
    const currentAnswers = [...answers];
    const currentAnswer = currentAnswers[questionIndex].answer;
    if (!questions[questionIndex].isMultiple) {
      return [choice];
    }
    if (currentAnswer.includes(choice)) {
      // Remove the choice if it's already in the array
      const updatedAnswer = currentAnswer.filter((c) => c !== choice);
      return updatedAnswer;
    } else {
      // Add the choice if it's not in the array
      const updatedAnswer = [...currentAnswer, choice];
      return updatedAnswer;
    }
  };

  const handleDeleteChoice = (questionIndex: number, choiceIndex: number) => {
    const newQuestions = [...questions];
    const newAnswers = [...answers];
    const test = newQuestions[questionIndex].choices.splice(choiceIndex, 1);
    // if the choice is in the answer array, remove it
    if (newAnswers[questionIndex].answer.includes(test[0])) {
      newAnswers[questionIndex].answer = newAnswers[questionIndex].answer.filter((c) => c !== test[0]);
    }
    setAnswers(newAnswers);
    setQuestions(newQuestions);
  };

  const handleAddQuestion = (e:any) => {
    e.preventDefault()
    setQuestions([...questions, { title: '', choices: ['', '', '', ''], isMultiple:false }]);
    setAnswers([...answers, { title: '', answer: [] }]);
  };

  const handleAddChoice = (index: number) => {
    const newQuestions = [...questions];
    newQuestions[index].choices.push('');
    setQuestions(newQuestions);
  };

  const handleRemoveQuestion = (e:any,index: number) => {
    e.preventDefault()
    const newQuestions = [...questions];
    const newAnswers = [...answers];

    newQuestions.splice(index, 1);
    newAnswers.splice(index, 1);

    setQuestions(newQuestions);
    setAnswers(newAnswers);
  };
  const handleSwitchChange = (e:any, index: number) => {
    const newQuestions = [...questions];
    const newAnswers = [...answers];
    newAnswers[index].answer = []
    newQuestions[index].isMultiple = e.target.checked;
    setAnswers(newAnswers);
    setQuestions(newQuestions);
  };
  const handleSubmit = (e:any) => {
    if (!courseId || !quizName || questions.some(q => !q.title || q.choices.some(c => !c)) || answers.some(a => !a.answer)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all the fields!',
      })
      return;
    }
    const quizData: QuizData = {
      course_id: courseId,
      name: quizName,
      question: questions,
      answer: answers,
      type:type
    };
    console.log(quizData);
    onSubmit(e,quizData);
  };

  return (
    <section>
      <div className='space-y-4 px-4'>
        {questions.map((q, index) => {
          return (
          <Card key={index} className='' shadow='sm'>
            <CardHeader className='py-3 px-10 flex justify-between border-b-1 border-gray-300'>
              <h1 className='text-lg'>Question {index + 1}</h1>
              <Button 
                radius='full' 
                color='danger' 
                size='sm' 
                variant="ghost" 
                isIconOnly 
                onClick={(e) => handleRemoveQuestion(e,index)}
              >
                <FontAwesomeIcon icon={faXmark}/>
              </Button>
            </CardHeader>
            <CardBody className='p-5 px-10 space-y-3'>
              <Input
                type='text'
                value={q.title}
                size='sm'
                variant='underlined'
                placeholder='Write A Question Here'
                required
                onChange={(e) => handleQuestionChange(index, e.target.value, q.choices, q.isMultiple)}
              />
              <div className='space-y-3'>
                {q.choices.map((choice, choiceIndex) => {
                  return(
                    <div key={choiceIndex} className='flex gap-2 items-center'>
                    <input
                      type={`${q.isMultiple ? 'checkbox' : 'radio'}`}
                      id={`choice-${index}-${choiceIndex}`}
                      name={`choice-${index}`}
                      required
                      value={choice}
                      className='w-4 h-4'
                      checked={answers[index].answer.includes(choice)}
                      onChange={() => handleAnswerChange(index, q.title, updateAnswer(index, choice))}
                    />
                    <Input
                      key={choiceIndex}
                      type="text"
                      required
                      placeholder='Write A Answer Here'
                      variant='bordered'
                      radius='sm'
                      size='sm'
                      className='w-fit'
                      value={choice}
                      onChange={(e) => {
                        const newChoices = [...q.choices];
                        newChoices[choiceIndex] = e.target.value;
                        handleQuestionChange(index, q.title, newChoices, q.isMultiple);
                      }}
                    />
                    <Button 
                      radius='full' 
                      size='sm' 
                      variant="light" 
                      isIconOnly 
                      onClick={(e) => handleDeleteChoice(index,choiceIndex)}
                    >
                      <FontAwesomeIcon icon={faTrashCan}/>
                    </Button>
                  </div>)
                })}
              </div>
              <CardFooter className='space-x-2'>
                <Switch size="sm" onChange={(e)=>handleSwitchChange(e,index)}>Mulitple Answers</Switch>
                <Button 
                  variant='light' 
                  startContent={<FontAwesomeIcon icon={faPlus}/>}
                  className='border-dark-blue text-dark-blue'
                  onClick={() => handleAddChoice(index)}
                >
                  Add Choice
                </Button>
              </CardFooter>
            </CardBody>
          </Card>
        )})}
      </div>
      <div className='my-4 flex flex-wrap gap-3'>
        <Button 
          size='md' 
          variant='bordered' 
          radius='none' 
          className='border-dark-blue text-dark-blue'
        >
          Save As Draft
        </Button>
        <Button 
          size='md' 
          variant='bordered' 
          radius='none' 
          className='border-dark-blue text-dark-blue'
        >
          Preview
        </Button>
        <Button 
          size='md'  
          variant='bordered' 
          radius='none' 
          className='border-dark-blue text-dark-blue' 
          onClick={handleAddQuestion}
        >
          Add Question
        </Button>
        <Button 
          size='md' 
          className='bg-dark-blue text-white' 
          radius='none' 
          onClick={(e)=>handleSubmit(e)}
        >
          Submit Quiz
        </Button>
      </div>
    </section>
  );
};
