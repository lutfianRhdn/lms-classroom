import React from 'react';
import Sidebar from '@/components/sidebar';
import { faBars, faBookOpenReader, faChalkboardUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { ThemeSwitch } from '@/components/theme-switch';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Table, Tab } from "@nextui-org/react";

const AdminLayout = ({
  title,
  subtitle,
  children,
}: {
    children: React.ReactNode;
    title: string;
    subtitle: string;
}) => {
  const menus = [
    {
      title: 'Dashboard',
      icon: faBars,
      link: '/admin/dashboard',
    },
    {
      title: 'Users',
      icon: faUsers,
      link: '/admin/users',
    },
    {
      title: 'Class',
      icon: faChalkboardUser,
      link: '/admin/class',
    },
    {
      title: 'Course',
      icon: faBookOpenReader,
      link: '/admin/class',
    },
  ];
  return (
    <>
      <section className='flex'>
        <Sidebar menu={menus} />
        <div className='container mx-auto max-w-7xl mt-10 px-6 flex-grow'>
          <Card className="w-full">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-2xl font-bold">{title || "TItle"}</p>
                <p className="text-sm">{ subtitle ||'subTitle'}</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="min-h-[75vh]" >
              {children}

            </CardBody>
          </Card>
        </div>
        <div className='pr-2 pt-2'>
        <ThemeSwitch />
        </div>

      </section>
    </>
  );
};

export default AdminLayout;