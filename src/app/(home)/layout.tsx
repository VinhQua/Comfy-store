"use client";
import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      <Navbar />
      {children}
    </section>
  );
}
