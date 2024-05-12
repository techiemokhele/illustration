"use client";

import LiveComponent from "@/components/layout/LiveComponent";
import NavbarComponent from "@/components/layout/NavbarComponent";

export default function Page() {
  return (
    <main className="overflow-hidden h-screen">
      <NavbarComponent />

      <section className="flex h-full flex-row">
        <LiveComponent />
      </section>
    </main>
  );
}
