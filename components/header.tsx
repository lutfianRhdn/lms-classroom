"use client";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarBrand,
	NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon} from "@/components/icons";
import { useContext } from "react";
import { MenuContext } from "@/app/context/MenuContext";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Header = () => {
	const { toggle , open } = useContext(MenuContext);
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);

	return (
		<NextUINavbar disableAnimation isBordered maxWidth="full" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<FontAwesomeIcon icon={faBars} onClick={toggle} className="fa-lg"/>
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<p className="font-bold text-inherit">{siteConfig.name}</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent
				className="flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
				<NavbarItem className="flex gap-3">
					<Button
						as={Link}
						className="font-normal text-default-600 bg-default-100"
						href="/auth/login"
						variant="flat"
					>
						Login
					</Button>
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>
		</NextUINavbar>
	);
};
