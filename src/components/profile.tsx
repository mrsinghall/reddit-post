"use client";

import { Session } from "inspector/promises";
import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return <div>From Client: user is signed in</div>;
  }

  return <div>From Client: user is not signed in</div>;
}
