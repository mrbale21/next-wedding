export const dynamic = "force-dynamic";

import SectionPage from "./section/page";

export default function Page({
  searchParams,
}: {
  searchParams: { to?: string };
}) {
  return <SectionPage searchParams={searchParams} />;
}
