"use client";

import LeftSideBarComponent from "@/components/layout/LeftSideBarComponent";
import LiveComponent from "@/components/layout/LiveComponent";
import NavbarComponent from "@/components/layout/NavbarComponent";
import RightSideBarComponent from "@/components/layout/RightSideBarComponent";

export default function Page() {
  return (
    <main className="overflow-hidden h-screen">
      <NavbarComponent />

      <section className="flex h-full flex-row">
        <LeftSideBarComponent />
        <LiveComponent />
        <RightSideBarComponent />
      </section>
    </main>
  );
}
