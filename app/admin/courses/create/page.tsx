'use client';
import AdminLayout from "@/layouts/AdminLayout";
import fetchApi from "@/utils/fetchApi";
import { Input } from "@nextui-org/input";
import { Button, Card, CardBody, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default  function Users() {
  const [name, setName] = useState('');
  const [class_id, setClassId] = useState('');
  const [instructorId, setInstructorId] = useState('');
  const [classes, setClasses] = useState([]);
  const [users, setUsers] = useState([]);
  
  const router = useRouter();
  async function handleSubmit(e:any) {
    e.preventDefault();
    const res = await fetchApi('/admin/courses', 'POST', {
      name,
      class_ids: class_id.split(',').map((id:any) => parseInt(id)),
      instructor_id: instructorId
    });
    if (res.data) {
        router.push('/admin/courses');
    } 
  }
  useEffect(() => {
    fetchApi('/admin/classes', 'GET').then(res => {
      setClasses(res.data);
    });
    fetchApi('/admin/users', 'GET').then(res => {
      setUsers(res.data.filter((user: any) => user.role == 'INSTRUCTOR'));
    });

  }, []);
  // const data = await getData();
  return (
    <AdminLayout title="User Management" subtitle="Create your user">
      <h1 className="text-xl font-bold mb-5">Create User   </h1>
      
      <form onSubmit={handleSubmit} className="max-w-2xl flex flex-col gap-5">
        <Input type="text" label="Name" placeholder="Enter  name" onChange={(e: any) => setName(e.target.value)} />
        <div className="flex gap-5 ">
          
          <Select label="Class" placeholder="Select class" selectionMode="multiple" onChange={(e: any) => setClassId(e.target.value)} >
          {classes.map((classs,index) => (
            <SelectItem value={classs?.id} key={classs.id}>{classs?.name}</SelectItem>
            ))}
          </Select>

          <Select label="Instructor" placeholder="Select Instructor" onChange={(e: any) =>setInstructorId(e.target.value)} >
            {users.map((user, index) => (
              <SelectItem value={user.id} key={user.id}>{user.username}</SelectItem>
            ))}
          </Select>
            </div>
        
        <div className="ml-auto">

        <Button color="primary" type="submit">Create</Button>
        </div>

      </form>
    </AdminLayout>
  );
}
