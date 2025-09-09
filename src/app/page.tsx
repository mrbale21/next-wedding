// app/page.tsx

import SectionPage from "./section/page";

export default function Page({
  searchParams,
}: {
  searchParams?: { to?: string };
}) {
  // Ambil query param di server, decode, dan pass sebagai prop.
  const rawTo = searchParams?.to;
  const guestName = rawTo ? decodeURIComponent(String(rawTo)) : "Tamu Undangan";

  return <SectionPage guestName={guestName} />;
}
