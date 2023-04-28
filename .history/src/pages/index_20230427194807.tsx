import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <button 
        onClick={() => signOut()}
      >deslogar</button>
    </>
  );
}
