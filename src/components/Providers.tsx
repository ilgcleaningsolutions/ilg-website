"use client";

import { Toaster as Sonner } from "@/components/ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sonner position="top-center" />
      {children}
    </>
  );
}
