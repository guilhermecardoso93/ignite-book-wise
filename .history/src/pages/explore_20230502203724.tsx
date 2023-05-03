import { useState } from 'react';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { NextPageWithLayout } from './_app'
import { ExploreContainer, TagsContainer } from "@/styles/pages/explore";
import { PageTitle } from '@/components/ui/PageTitle';
import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react';
import { Input } from '@/components/ui/form/Input';
import { Tag } from '@/components/ui/Tag';

const ExplorePage: NextPageWithLayout = () => {
  const [search, setSearch] = useState('')
  return (
    <ExploreContainer>
      <header>
        <PageTitle title='Explorar' icon={<Binoculars size={32} />}/>
        <Input
          placeholder='Buscar livro ou autor'
          icon={<MagnifyingGlass size={30}/>}
          css={{
            maxWidth: 433
          }}
          value={search}
          onChange={({ target}) => setSearch(target.value)}
        />
      </header>
      <TagsContainer>
        <Tag>Oi</Tag>      </TagsContainer>
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