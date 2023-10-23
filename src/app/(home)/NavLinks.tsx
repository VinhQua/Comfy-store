"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const links = [
  { id: 1, url: "landing", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "products", text: "products" },
  { id: 4, url: "cart", text: "cart" },
  { id: 5, url: "checkout", text: "checkout" },
  { id: 6, url: "orders", text: "orders" },
];

const NavLinks = () => {
  const user = null;
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if ((url === "checkout" || url === "orders") && !user) return;
        return (
          <li key={url}>
            <Link
              className={`capitalize ${pathname === `/${url}` ? "active" : ""}`}
              href={`/${url}`}
            >
              {text}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
