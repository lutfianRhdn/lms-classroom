'use client';
import AdminLayout from "@/layouts/AdminLayout";
import fetchApi from "@/utils/fetchApi";
import { Input } from "@nextui-org/input";
import { Button, Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default  function Users() {
  const [className, setClassName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  async function handleSubmit(e:any) {
    e.preventDefault();
    const res = await fetchApi('/classes', 'POST', { class: className })
    if(!res.data) setErrorMessage(res.message);
    return router.push('/admin/classes');
  }
  return (
    <AdminLayout title="User Management" subtitle="Create your user">
      <h1 className="text-xl font-bold mb-5 text-center">Create New Class   </h1>
      <form onSubmit={handleSubmit} className="w-1/2 max-w-2xl flex flex-col gap-5 mx-auto">
        <Input type="text" label="Class Name" placeholder="Enter Class Name" errorMessage={errorMessage} onChange={(e)=>setClassName(e.target.value)} />
       
        <Button color="primary" type="submit">Create</Button>

      </form>
    </AdminLayout>
  );
}
