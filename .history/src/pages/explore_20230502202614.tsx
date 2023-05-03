import { DefaultLayout } from '@/layouts/DefaultLayout';
import { NextPageWithLayout } from './_app'
import { ExploreContainer } from "@/styles/pages/explore";
import { PageTitle } from '@/components/ui/PageTitle';
import { Binoculars } from '@phosphor-icons/react';

const ExplorePage: NextPageWithLayout = () => {
  return (
    <ExploreContainer>
      <header>
        <PageTitle title='Explorar' icon={<Binoculars size={32} />}/>
      </header>
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