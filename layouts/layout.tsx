import { Header } from "@/components/header";
import Sidebar from "@/components/sidebar";
import { MenuContext, MenuContextProvider } from "../app/context/MenuContext";
import { useContext } from "react";

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
    <MenuContextProvider>
      <Header/>
      <div className="flex min-h-[90vh]">
        <Sidebar/>
        <main className="dark:bg-gray-900 bg-gray-100 h-auto flex-grow ">
          {children}
        </main>
      </div>
    </MenuContextProvider>
	);
}
