"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const SectionPage = dynamic(() => import("./section/page"), { ssr: false });

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SectionPage />
    </Suspense>
  );
}
