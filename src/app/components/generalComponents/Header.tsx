"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { userService } from "@/app/services/user/user.service.local";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<{ _id: string; fullname: string } | null>(null)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const loggedUser = userService.getLoggedinUser()
    setUser(loggedUser)
  }, [])

  return (
    <section
      className={`transition-colors duration-300
      ${isScrolled ? "bg-black/60 backdrop-blur-md" : "bg-transparent"}
      `}
    >
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/bujFoods-logo.png"
            alt="BujFoods Logo"
            width={100}
            height={100}
            className="rounded-md"
          />
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/restaurants"
            className="text-white/80 hover:text-white transition"
          >
            Restaurants
          </Link>
          <Link
            href="/about"
            className="text-white/80 hover:text-white transition"
          >
            About
          </Link>

          {user ? (
            <span className="text-black/80 hover:text-white transition">
              Hello {user.fullname}!
            </span>
          ) : <Link
            href="/login"
            className="rounded-md bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 text-sm font-medium transition"
          >
            Login
          </Link>}

        </div>
      </nav>
    </section>
  );
}
