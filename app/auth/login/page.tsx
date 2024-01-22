'use client'

import React, { useEffect, useState } from "react";
import {  Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false)
  const [error,setError] = useState('')

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setLoading(true)
    signIn("credentials", {
      username,
      password,
      redirect:false
    }).then(({ok,error}:any) => {
      setError(error)
      setLoading(false)
    })
    
  };
  useEffect(() => {
    if (session) {
      router.push('/');
    }
  },[session])



  return (
    <section className="flex flex-col py-10 items-center bg-white my-5 max-w-md mx-auto">
      <h1 className="text-3xl font-bold">Login</h1>
      <div className="p-4 m-4 bg-dark-blue/10 text-dark-blue space-y-3 text-sm rounded-md">
        <p>For Students, please log in using your username <b>(NIM)</b> and password.</p>
        <p>For Lecturers, please log in using an Email account by clicking the Log in Lecturer Using <b>Email</b> button located below the Log in form.</p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto w-full my-5">
        <div className="space-y-10 mb-10">
          <Input
            isRequired
            type="text"
            id="username"
            name="username"
            value={username}
            placeholder="Type something here...."
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
            labelPlacement="outside"
            startContent={<FontAwesomeIcon icon={faUser} className="mx-2 text-dark-blue"/>}
            classNames={{
              label: "font-bold text-md"
            }}
          />
          <Input
            isRequired
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Type something here...."
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            labelPlacement="outside"
            startContent={<FontAwesomeIcon icon={faLock} className="mx-2 text-dark-blue"/>}
            classNames={{
              label: "font-bold text-md"
            }}
          />
        </div>
        
        <p className="my-2">{error}</p>
        <div className="flex items-center justify-between text-dark-blue">
            <Button 
              isLoading={loading} 
              type="submit" 
              className="w-full bg-dark-blue text-white font-bold"
            >
              Login
            </Button>
        </div>
      </form>
    </section>
  );
};

export default Login;
