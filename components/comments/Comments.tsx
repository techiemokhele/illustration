"use client";

import { ClientSideSuspense } from "@liveblocks/react";

//custom
import { CommentsOverlay } from "@/components/comments/CommentsOverlay";

export const Comments = () => (
  <ClientSideSuspense fallback={null}>
    {() => <CommentsOverlay />}
  </ClientSideSuspense>
);
