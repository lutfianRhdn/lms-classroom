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
  
  return (
    <>
      <section className='flex h-screen py-5 my-5'>
        <div className='container mx-auto max-w-7xl mt-10 px-6 flex-grow'>
          <Card className="px-5 py-2">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-2xl font-bold">{title || "TItle"}</p>
                <p className="text-sm">{ subtitle ||'subTitle'}</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="h-[75vh]" >
              {children}
            </CardBody>
          </Card>
        </div>

      </section>
    </>
  );
};

export default AdminLayout;