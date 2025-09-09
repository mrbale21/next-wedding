// src/app/section/layout.tsx
import { Suspense } from "react";

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}
