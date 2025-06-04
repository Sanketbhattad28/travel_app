"use client";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="flex max-container padding-container flexBetween relative z-30 py-5">
        <Link href="/">
          <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="regular-16 text-grey-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {isOpen && (
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } w-full flex flex-col gap-4 px-2 lg:hidden absolute top-16 left-0 bg-white shadow-lg transition delay-150 duration-300 ease-in-out z-4000 hover:font-bold`}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(!isOpen)}
                  className="regular-16 text-grey-50 cursor-pointer pb-1.5 transition-all hover:font-bold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="lg:flex hidden">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>

        <Image
          src="/menu.svg"
          alt="menu icon"
          className="inline-block cursor-pointer lg:hidden"
          width={32}
          height={32}
          onClick={() => setIsOpen(!isOpen)}
        />
      </nav>
    </div>
  );
};

export default Navbar;
