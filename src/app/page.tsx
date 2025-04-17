import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign in with Github</Button>
      </form>

      <form action={actions.signOut}>
        <Button type="submit">Sign out</Button>
      </form>

      {session?.user ? (
        <div>Hello! {session.user.name}</div>
      ) : (
        <div>Signed Out</div>
      )}
      <Profile />
    </div>
  );
}
