import React, { useEffect } from "react";
import { SignIn, signOut, useSession } from "next-auth/client";

import { useRouter } from "next/router";

import Nav from "../components/Nav";
import Illustration from "../partials/Illustration";
import SignInForm from "../components/SignInForm";

export default function SignInPage() {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  return (
    <section className="antialiased">
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Nav />

        {/*  Page content */}
        <main className="flex-grow">
          {/*  Page illustration */}
          <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
            <Illustration />
          </div>

          <SignInForm />
        </main>
      </div>
    </section>
  );
}
