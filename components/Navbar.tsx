"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { 
  Compass, 
  Home, 
  MapPin, 
  PlusCircle, 
  CalendarCheck, 
  User, 
  LogOut, 
  LogIn, 
  UserPlus, 
  Menu, 
  X 
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session,isPending } = useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <nav className="bg-white text-gray-800 shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LEFT SIDE: Brand Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold text-[#00a8cc] tracking-tight"
            >
              <Compass className="w-7 h-7 animate-spin-slow" />
              <span>Wanderlust</span>
            </Link>
          </div>

          {/* CENTER: Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-[#00a8cc] font-semibold transition-colors"
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
            <Link
              href="/all-destination"
              className="flex items-center gap-1.5 text-gray-600 hover:text-[#00a8cc] transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Destinations
            </Link>
            <Link
              href="/add-destination"
              className="flex items-center gap-1.5 text-gray-600 hover:text-[#00a8cc] transition-colors"
            >
              <PlusCircle className="w-4 h-4" />
              Add Destination
            </Link>
            <Link
              href="/my-bookings"
              className="flex items-center gap-1.5 text-gray-600 hover:text-[#00a8cc] transition-colors"
            >
              <CalendarCheck className="w-4 h-4" />
              My Bookings
            </Link>
          </div>

          {/* RIGHT SIDE: User Actions */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {isPending ? (
              <div className="w-24 h-8 bg-[#b5d9e0] animate-pulse rounded-sm"></div>
            ): user ? (
              <div className="flex items-center gap-4">
                <Link
                  href="/profile"
                  className="flex items-center gap-1.5 text-gray-600 hover:text-[#00a8cc] transition-colors text-xs uppercase tracking-wider font-semibold"
                >
                  <User className="w-4 h-4" />
                  Profile
                </Link>
                
                {/* User Avatar Popover */}
                <Popover>
                  <PopoverTrigger>
                    <Avatar className="cursor-pointer border-2 border-[#00a8cc]/20 hover:border-[#00a8cc] transition">
                      <AvatarImage
                        referrerPolicy="no-referrer"
                        src={user?.image as string}
                      />
                      <AvatarFallback className="bg-[#00a8cc] text-white font-medium">
                        {user?.name?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className="w-60 p-4 shadow-lg rounded-md border-gray-100">
                    <PopoverHeader className="text-left space-y-2">
                      <PopoverTitle className="text-sm font-semibold text-gray-900">
                        {user?.name}
                      </PopoverTitle>
                      <PopoverDescription className="text-xs text-gray-500 break-all">
                        {user?.email}
                      </PopoverDescription>
                    </PopoverHeader>
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <Button
                        onClick={handleSignOut}
                        variant={"destructive"}
                        className="w-full flex items-center justify-center gap-2 text-xs cursor-pointer rounded-sm"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        Sign Out
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="flex items-center gap-1.5 px-4 py-2 text-gray-700 hover:text-[#00a8cc] text-xs font-medium uppercase tracking-wider transition"
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="flex items-center gap-1.5 px-4 py-2 bg-[#00a8cc] hover:bg-[#0091b0] text-white text-xs font-medium uppercase tracking-wider rounded-sm transition shadow-sm"
                >
                  <UserPlus className="w-4 h-4" />
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#00a8cc] p-2 focus:outline-none transition"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3 shadow-md animate-fadeIn">
          <Link 
            href="/" 
            className="flex items-center gap-2.5 text-gray-700 hover:text-[#00a8cc] py-2 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Home className="w-4 h-4 text-[#00a8cc]" />
            Home
          </Link>
          <Link
            href="/all-destination"
            className="flex items-center gap-2.5 text-gray-700 hover:text-[#00a8cc] py-2 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <MapPin className="w-4 h-4 text-[#00a8cc]" />
            Destinations
          </Link>
          <Link
            href="/add-destination"
            className="flex items-center gap-2.5 text-gray-700 hover:text-[#00a8cc] py-2 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <PlusCircle className="w-4 h-4 text-[#00a8cc]" />
            Add Destination
          </Link>
          <Link
            href="/my-bookings"
            className="flex items-center gap-2.5 text-gray-700 hover:text-[#00a8cc] py-2 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <CalendarCheck className="w-4 h-4 text-[#00a8cc]" />
            My Bookings
          </Link>
          
          <hr className="border-gray-100 my-2" />
          
          <Link
            href="/profile"
            className="flex items-center gap-2.5 text-gray-700 hover:text-[#00a8cc] py-2 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <User className="w-4 h-4 text-[#00a8cc]" />
            Profile
          </Link>

          {user ? (
            <button
              onClick={() => {
                handleSignOut();
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition mt-2"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          ) : (
            <div className="flex flex-col gap-2 pt-2">
              <Link
                href="/login"
                className="flex items-center justify-center gap-2 border border-gray-200 text-gray-700 py-2.5 rounded-sm text-xs font-medium uppercase tracking-wider transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <LogIn className="w-4 h-4" />
                Login
              </Link>
              <Link
                href="/signup"
                className="flex items-center justify-center gap-2 bg-[#00a8cc] text-white py-2.5 rounded-sm text-xs font-medium uppercase tracking-wider transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <UserPlus className="w-4 h-4" />
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;