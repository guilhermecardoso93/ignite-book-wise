import { signOut } from "next-auth/react";
import { NextPageWithLayout } from "./_app";
import { DefaultLayout } from "@/layouts/DefaultLayout";

function Home<NextPageWithLayout>(): JSX.Element {
  return (
    <>
      <h1>Hello World</h1>
      <button 
        onClick={() => signOut()}
      >deslogar</button>
    </>
  );
}


Home.getLayout = (page: any) => {
  return(
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}

export default Home