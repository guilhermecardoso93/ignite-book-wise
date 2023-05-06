import { HomeContainer } from "@/styles/pages/home";
import { NextPageWithLayout } from "../_app";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { ReactElement } from "react";
import { ProfileRating } from "@/components/ProfileRatings";

function ProfilePage<NextPageWithLayout>() {
  return (
    <HomeContainer>
      <ProfileRating />
    </HomeContainer>
  )
}

ProfilePage.getLayout = (page: ReactElement ) => {
  return (
    <DefaultLayout title='Perfil'>
      {page}
    </DefaultLayout>
  )
}

export default ProfilePage