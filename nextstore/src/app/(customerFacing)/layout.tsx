import Nav, { NavLink } from "@/components/Nav";
import React from "react";

export const dynamic = "force-dynamic"; // forces nextjs to not cache admin pages
// since we will always want our admin infor to be fresh and not from cache
// NOTE THAT THIS WILL NOT BE NECESSARY FOR USER PAGES, SINCE WE WOULD LIKE TO CACHE USER'S
// DATA THAT THE USER WOULD NOT LIKE TO KEEP REPEATING, FOR EXAMPLE

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Nav>
        <NavLink href="/"> Home </NavLink>
        <NavLink href="/products"> Products </NavLink>
        <NavLink href="/orders"> My Orders </NavLink>
      </Nav>
      <div className="container my-6">{children} </div>
    </>
  );
}
