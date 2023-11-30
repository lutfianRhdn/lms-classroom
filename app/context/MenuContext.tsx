"use client";
import React, { useState, createContext} from "react";


interface MenuContextProps {
  open: boolean;
  search: string;
  setSearch: any;
  toggle: () => void;
}

export const MenuContext = createContext<MenuContextProps>({
  open: false,
  search: '',
  setSearch: () => {},
  toggle: () => {}
});

type MenuContextProviderProps = {
  children?: React.ReactNode;
}
export const MenuContextProvider = ({ children }:MenuContextProviderProps) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <MenuContext.Provider value={{ open, toggle, search, setSearch }}>
      {children}
    </MenuContext.Provider>
  );
};