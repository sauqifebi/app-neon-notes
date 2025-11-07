"use client";

import Link from "next/link";
import { useStackApp, useUser } from "@stackframe/stack";
import { Box, Heading, Button } from "@chakra-ui/react";
import type { ReactNode } from "react";

export function Header({ children }: { children?: ReactNode }) {
  const user = useUser();
  const app = useStackApp();

  return (
    <Box background="tomato" width="100%" padding="4" color="white">
      <div>
        <div>
          <Heading> App Notes </Heading>
        </div>
        {user ? (
          <div className="flex justify-between items-center gap-4">
            <div>{children}</div>
            <Heading> Hello {user.primaryEmail} </Heading>
            <Link href={app.urls.signOut}>Sign Out</Link>
          </div>
        ) : (
          <div>
            <Link href={app.urls.signIn}>
              <Button>Sign in</Button>
            </Link>{" "}
            |
            <Link href={app.urls.signUp}>
              <Button>Sign Up</Button>
            </Link>
          </div>
        )}
      </div>
    </Box>
  );
}
