"use client";
import React from 'react'
import Link from "next/link";

import InputSearch from "./InputSearch"

export default function Navbar() {
  return (
    <>
        <header>
              <nav className="container w-full max-w-screen-xl mx-auto my-5 p-5 flex">
                <Link href='/' className=" flex-grow">
                    <h1 className="text-3xl mr-5">Amarthanime</h1>
                </Link>
                <InputSearch />
            </nav>
        </header>
    </>
  )
}
