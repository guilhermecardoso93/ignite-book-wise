import { signOut } from "next-auth/react";
import { NextPageWithLayout } from "./_app";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { HomeContainer } from "@/styles/pages/home";
import { LatestRatings } from "@/components/LatestRatings";
import { PopularsBooks } from "@/components/PopularsBooks";

const Home: NextPageWithLayout = () => {
  return (
    <HomeContainer>
      <LatestRatings />
    </HomeContainer>
  );
};

Home.getLayout = (page) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>;
};

export default Home;
