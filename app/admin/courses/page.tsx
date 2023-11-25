'use client'
import { SearchIcon } from "@/components/icons";
import Modal from "@/components/modal";
import Table from "@/components/table";
import AdminLayout from "@/layouts/AdminLayout";
import fetchApi from "@/utils/fetchApi";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export const dynamic = 'force-dynamic';
export default async function Users() {
  const headers = ['name', 'student count'];
  const router = useRouter() 
  async function  getData() {
    const courses = (await fetchApi('/courses', 'GET'));
    return courses.data;
  }
  const handleDelete = async (id:number) => {
    await fetchApi(`/courses/${id}`, 'DELETE');
      window.location.reload();
  }
  const data = await getData();

  return (
    <AdminLayout title="Course Management" subtitle="Manage your Course Here">
      <div className="flex items-center my-5 gap-10 ">
        <Input
          label="Search"
          isClearable
          radius="lg"
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
          }}
          placeholder="Type to search..."
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
          />

        <Button color="primary" className="mr-2" as={Link} href="/admin/courses/create">Create New Course</Button>
      </div>

      <Table headers={headers} data={data} uniqueKey="id" module="admin/courses" onDelete={handleDelete} />
    </AdminLayout>
  );
}
