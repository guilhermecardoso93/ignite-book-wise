import { signOut } from "next-auth/react";
import { NextPageWithLayout } from "./_app";
import { DefaultLayout } from "@/layouts/DefaultLayout";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <h1>Hello World</h1>
      <button onClick={() => signOut()}>deslogar</button>
    </>
  );
};

Home.getLayout = (page) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>;
};

export default Home;
