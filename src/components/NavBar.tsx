import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/">
          <h3 className="text-3xl font-bold ">Book App List</h3>
        </Link>

        <ul className="flex gap-x-2 text-lg font-bold">
          <li>
            <Link href="/about" className="text-slate-300 hover:text-slate-200">
              About
            </Link>
          </li>
          <li>
            <Link
              href="/readingList"
              className="text-slate-300 hover:text-slate-200"
            >
              Lista de lectura
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
