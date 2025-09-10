export const dynamic = "force-dynamic";

import BrowserCheck from "./section/browser-check";
import SectionPage from "./section/page";

export default function Page() {
  return (
    <>
      <BrowserCheck />
      <SectionPage />{" "}
    </>
  );
}
