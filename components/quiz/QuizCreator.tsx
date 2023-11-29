"use client";
import React, { useState } from 'react';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface QuizProps {
  courseId: any;
  quizName: string;
  onSubmit: any;
}

interface Question {
  title: string;
  choices: string[];
}

interface Answer {
  title: string;
  answer: string;
}

interface QuizData {
  course_id: string;
  name: string;
  question: Question[];
  answer: Answer[];
}

export const QuizCreator = ({ courseId,quizName,onSubmit }:QuizProps) => {
  const [questions, setQuestions] = useState<Question[]>([{ title: '', choices: ['', '', '', ''] }]);
  const [answers, setAnswers] = useState<Answer[]>([{ title: '', answer: '' }]);

  const handleQuestionChange = (index: number, title: string, choices: string[]) => {
    const newQuestions = [...questions];
    newQuestions[index] = { title, choices };
    setQuestions(newQuestions);
  };

  const handleAnswerChange = (index: number, title: string, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = { title, answer };
    setAnswers(newAnswers);
  };

  const handleAddQuestion = (e:any) => {
    e.preventDefault()
    setQuestions([...questions, { title: '', choices: ['', '', '', ''] }]);
    setAnswers([...answers, { title: '', answer: '' }]);
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

  const handleSubmit = (e:any) => {
    if (!courseId || !quizName || questions.some(q => !q.title || q.choices.some(c => !c)) || answers.some(a => !a.answer)) {
      alert('Harap isi semua data sebelum mengirimkan kuis.');
      return;
    }
    const quizData: QuizData = {
      course_id: courseId,
      name: quizName,
      question: questions,
      answer: answers,
    };
    onSubmit(e,quizData);
  };

  return (
    <section>
      <div className='space-y-4'>
      {questions.map((q, index) => (
        <Card key={index} className='p-4'>
          <div className='flex justify-end'>
            <Button radius='full' color='danger' size='sm' variant="ghost" isIconOnly onClick={(e) => handleRemoveQuestion(e,index)}><FontAwesomeIcon icon={faXmark}/></Button>
          </div>
          <CardHeader>
            <Input
              label={`Question ${index + 1}`}
              type="text"
              value={q.title}
              required
              onChange={(e) => handleQuestionChange(index, e.target.value, q.choices)}
            />
          </CardHeader>
          <CardBody className='space-y-3'>
            {q.choices.map((choice, choiceIndex) => (
              <div key={choiceIndex} className='flex gap-4'>
                <input
                  type="radio"
                  id={`choice-${index}-${choiceIndex}`}
                  name={`choice`}
                  required
                  // value={choice}
                  // checked={answers[index].answer === choice}
                  onChange={() => handleAnswerChange(index, q.title, choice)}
                />
                <Input
                  key={choiceIndex}
                  type="text"
                  required
                  label={`Choice ${choiceIndex}`}
                  value={choice}
                  onChange={(e) => {
                    const newChoices = [...q.choices];
                    newChoices[choiceIndex] = e.target.value;
                    handleQuestionChange(index, q.title, newChoices);
                  }}
                />
              </div>
              
            ))}
          </CardBody>
          <div className='hidden'>
            {q.choices.map((choice, choiceIndex) => (
              <div key={choiceIndex}>
                <input
                  type="radio"
                  id={`choice-${index}-${choiceIndex}`}
                  name={`choice-${index}`}
                  value={choice}
                  checked={answers[index].answer === choice}
                  onChange={() => handleAnswerChange(index, q.title, choice)}
                />
                <label htmlFor={`choice-${index}-${choiceIndex}`}>{choice}</label>
              </div>
            ))}
          </div>
          <CardFooter>
          </CardFooter>
        </Card>
      ))}
      </div>
      <Card className='my-4'>
        <CardBody className='flex flex-row gap-4 justify-end'>
          <Button onClick={handleAddQuestion}>Add Question</Button>
          <Button color='primary' onClick={(e)=>handleSubmit(e)}>Submit Quiz</Button>
        </CardBody>
      </Card>
    </section>
  );
};
