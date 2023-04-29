import { signOut } from "next-auth/react";
import { NextPageWithLayout } from "./_app";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { HomeContainer } from "@/styles/pages/home";

const Home: NextPageWithLayout = () => {
  return (
    <HomeContainer>
      
    </HomeContainer>
  );
};

Home.getLayout = (page) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>;
};

export default Home;
