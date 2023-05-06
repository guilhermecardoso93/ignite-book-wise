import { HomeContainer } from "@/styles/pages/home";
import { NextPageWithLayout } from "../_app";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { ReactElement } from "react";
import { ProfileRating } from "@/components/ProfileRatings";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";

export type ProfileData = {
  ratings: ProfileRating[];
  user: {
    avatar_url: string;
    name: string;
    member_since: string;
  };
  readPages: number;
  ratedBooks: number;
  readAuthors: number;
  mostReadCategory?: string;
};

function ProfilePage<NextPageWithLayout>() {
  const router = useRouter();
  const userId = router.query.id as string;

  const { data: session } = useSession();

  const isOwnProfile = session?.user?.id === userId;

  const { data: profile } = useQuery<ProfileData>(
    ["profile", userId],
    async () => {
      const { data } = await api.get(`/profile/${userId}`);
      return data?.profile ?? {};
    },
    {
      enabled: !!userId,
    }
  );

  return (
    <HomeContainer>
      {!!profile ? (
        <>
          <ProfileRating ratings={profile.ratings}/>
        </>
      ) : (
        <h1>Carregando...</h1>
      )}
    </HomeContainer>
  );
}

ProfilePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Perfil">{page}</DefaultLayout>;
};

export default ProfilePage;
