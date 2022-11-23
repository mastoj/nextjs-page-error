"use client";
import React from "react";

export type Props = {
  searchParams: { q: string };
};

const Page = ({ searchParams }: any) => {
  return <div>Search {searchParams.q}</div>;
};

export default Page;
