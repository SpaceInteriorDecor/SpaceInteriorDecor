"use client";
import React from "react";
import { useTheme } from "next-themes";
import { ModeToggle } from "./toggle";
import { FaBars, FaHome, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const Header = () => {
  const { theme } = useTheme();

  return (
    <nav
      className="fixed z-50 w-full top-0 left-0 
      bg-white/60 dark:bg-gray-900/70 
      backdrop-blur-xl 
      border-b border-gray-200/50 dark:border-gray-700/30 
      shadow-lg shadow-gray-200/30 dark:shadow-black/30
      transition-all duration-300
      p-3"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src={theme === "light" ? "/logo-dark.png" : "/logo.png"}
            alt="Logo"
            width={50}
            height={50}
            className="transition-transform hover:scale-110 drop-shadow-md"
          />
          <div
            className="font-bold text-lg text-gray-800 dark:text-gray-200 
            tracking-wider 
            bg-white/30 dark:bg-gray-800/30 
            px-3 py-1 rounded-full"
          >
            SiD
          </div>
        </div>

        {/* Centered Menu for larger screens */}
        <div
          className="hidden md:flex items-center space-x-6 
          bg-white/30 dark:bg-gray-800/30 
          backdrop-blur-md 
          px-6 py-2 
          rounded-full"
        >
          <NavLink href="#home" icon={<FaHome className="mr-2" />}>
            Home
          </NavLink>
          <NavLink
            href="#projects"
            icon={<FaProjectDiagram className="mr-2" />}
          >
            Projects
          </NavLink>
          <NavLink href="#contact" icon={<FaEnvelope className="mr-2" />}>
            Contact Us
          </NavLink>
        </div>

        {/* Theme Toggle and Mobile Menu */}
        <div className="flex items-center space-x-3">
          <div className="hidden md:block">
            <ModeToggle />
          </div>

          {/* Hamburger Menu for small screens */}
          <div className="md:hidden flex items-center space-x-2">
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="p-2 rounded-full 
                  bg-white/30 dark:bg-gray-800/30 
                  backdrop-blur-md
                  hover:bg-gray-100 dark:hover:bg-gray-700 
                  transition-all duration-300"
                >
                  <FaBars
                    size={20}
                    className="text-gray-600 dark:text-gray-300"
                  />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-48 
                  bg-white/80 dark:bg-gray-900/80 
                  backdrop-blur-xl 
                  shadow-lg rounded-xl 
                  border border-gray-200/50 dark:border-gray-700/30"
              >
                <MobileNavItem href="#home" icon={<FaHome />}>
                  Home
                </MobileNavItem>
                <MobileNavItem href="#projects" icon={<FaProjectDiagram />}>
                  Projects
                </MobileNavItem>
                <MobileNavItem href="#contact" icon={<FaEnvelope />}>
                  Contact Us
                </MobileNavItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Reusable Navigation Link Component for Desktop
const NavLink = ({ href, children, icon }: any) => (
  <a
    href={href}
    className="flex items-center text-gray-700 dark:text-gray-300 
      font-medium 
      hover:text-blue-600 dark:hover:text-blue-400 
      transition-colors group 
      px-2 py-1 
      rounded-full 
      hover:bg-gray-100 dark:hover:bg-gray-800"
  >
    {icon}
    <span className="group-hover:scale-105 transition-transform">
      {children}
    </span>
  </a>
);

// Reusable Mobile Navigation Item Component
const MobileNavItem = ({ href, children, icon }: any) => (
  <DropdownMenuItem asChild>
    <a
      href={href}
      className="w-full flex items-center px-3 py-2 
      text-gray-700 dark:text-gray-300 
      hover:bg-gray-100/50 dark:hover:bg-gray-700/50 
      hover:text-blue-600 dark:hover:text-blue-400 
      transition-colors"
    >
      {React.cloneElement(icon, {
        className: "mr-3 text-gray-500 dark:text-gray-400",
      })}
      {children}
    </a>
  </DropdownMenuItem>
);

export default Header;
