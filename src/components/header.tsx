"use client";
import React from "react";
import { useTheme } from "next-themes";
import { ModeToggle } from "./toggle";
import { FaBars } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; // Adjust the import path as needed
import Image from "next/image";

const Header = () => {
  const { theme } = useTheme();

  return (
    <nav className="fixed z-10 w-full top-0 left-0 border-b flex items-center justify-between bg-white dark:bg-gray-900 shadow-md p-2">
      <div className="flex items-center">
        <Image
          src={theme === "light" ? "/logo-dark.png" : "/logo.png"}
          alt="Logo"
          width={40}
          height={40}
        />
        <div className="font-semibold text-md ml-2 mt-2">SiD</div>
      </div>

      {/* Centered Menu for larger screens */}
      <div className="hidden md:flex space-x-8">
        <a
          href="#home"
          className="hover:text-blue-600 dark:hover:text-blue-400"
        >
          Home
        </a>
        <a
          href="#projects"
          className="hover:text-blue-600 dark:hover:text-blue-400"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hover:text-blue-600 dark:hover:text-blue-400"
        >
          Contact Us
        </a>
      </div>

      {/* Theme Toggle Button */}
      {
        <div className="hidden md:flex">
          <ModeToggle />
        </div>
      }

      {/* Hamburger Menu for small screens */}
      <div className="md:hidden flex items-center">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="ml-2">
              <FaBars size={20} className="text-gray-800 dark:text-gray-100" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-40 bg-white dark:bg-gray-800"
          >
            <DropdownMenuItem asChild>
              <a
                href="#home"
                className="w-full text-left hover:text-blue-600 dark:hover:text-blue-400"
              >
                Home
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a
                href="#projects"
                className="w-full text-left hover:text-blue-600 dark:hover:text-blue-400"
              >
                Projects
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a
                href="#contact"
                className="w-full text-left hover:text-blue-600 dark:hover:text-blue-400"
              >
                Contact Us
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Header;
