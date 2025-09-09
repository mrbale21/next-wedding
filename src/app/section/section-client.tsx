"use client";

import { useSearchParams } from "next/navigation";
import IntroPage from "./intro-page";

interface SectionClientProps {
  onOpen: () => void; // wajib dikirim dari SectionPage
}

export default function SectionClient({ onOpen }: SectionClientProps) {
  const searchParams = useSearchParams();
  const rawTo = searchParams.get("to");
  const guestName = rawTo ? decodeURIComponent(rawTo) : "Tamu Undangan";

  return <IntroPage guestName={guestName} onOpen={onOpen} />;
}
