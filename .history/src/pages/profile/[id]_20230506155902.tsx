import { HomeContainer } from "@/styles/pages/home";
import { NextPageWithLayout } from "../_app";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { ReactElement } from "react";

function ProfilePage<NextPageWithLayout>() {
  return (
    <HomeContainer>

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