import { useSession } from "next-auth/client";

export default function Component() {
  const [session, loading] = useSession();

  if (session) {
    console.log(session);
    return <p>Signed in as {session.user.accounts}</p>;
  }

  return <a href="/api/auth/signin">Sign in</a>;
}
