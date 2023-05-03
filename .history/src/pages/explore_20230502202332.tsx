import { DefaultLayout } from '@/layouts/DefaultLayout';
import { NextPageWithLayout } from './_app'
import { ExploreContainer } from "@/styles/pages/explore";

const ExplorePage: NextPageWithLayout = () => {
  return (
    <ExploreContainer>
      
    </ExploreContainer>
  )
}

ExplorePage.getLayout = (page) => {
  return (
    <DefaultLayout title='Explorar'>
      {page}
    </DefaultLayout>
  )
}

export default ExplorePage