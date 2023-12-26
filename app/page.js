"use client";
import Head from "next/head";
import OverviewFlow from "@/components/Flow";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Flow builder</title>
      </Head>
      <OverviewFlow />
    </div>
  );
}
