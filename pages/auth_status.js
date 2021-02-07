import { useSession } from "next-auth/client";

export default function Component() {
  const [session, loading] = useSession();

  if (session) {
    return <p>Signed in as {session.user.accounts}</p>;
    console.log(session);
  }

  return <a href="/api/auth/signin">Sign in</a>;
}
