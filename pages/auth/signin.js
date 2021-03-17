import React, { useEffect } from "react";
import { providers, SignIn, signOut, useSession, getSession, csrfToken } from "next-auth/client";

import Link from "next/link";

import Nav from "../../components/Nav";
import Illustration from "../../partials/Illustration";
import SignInForm from "../../components/SignInForm";

export default function SignInPage({ providers, csrfToken }) {
  const [session, loading] = useSession();

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

SignInPage.getInitialProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
    return;
  }
  return {
    session: undefined,
    providers: await providers(context),
    csrfToken: await csrfToken(context),
  };
};
