'use client'

import React, { useEffect, useState } from "react";
import {  Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { data: session } = useSession();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Add your registration logic here

    signIn("credentials", {
      username,
      password,
      callbackUrl: `/`,
    })
    
  };
  useEffect(() => {
    if (session) {
      router.push('/');
    }
  },[session])

  return (
    <section className="flex flex-col py-10 items-center">
      <div>
      <h1 className="text-3xl font-bold">Login</h1>
      </div>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8 w-full">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <Input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold">
            Login
            </Button>
            <Link href="/auth/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              i dont have an account
            </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
