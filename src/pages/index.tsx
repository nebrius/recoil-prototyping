import { SiteHeader } from 'components/header'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getCurrentUser, getLists } from 'server/db'
import { HomePageInitialState } from 'types/hydration'

function HomePage({ lists }: HomePageInitialState) {
    return (
        <div>
            <Head>
                <title>Multi-todo</title>
            </Head>
            <SiteHeader />
            {JSON.stringify(lists)}
        </div>
    )
}

export default HomePage

export const getServerSideProps: GetServerSideProps<
    HomePageInitialState
> = async () => {
    const lists = await getLists()
    const currentUser = await getCurrentUser()
    const props: HomePageInitialState = {
        lists,
        currentUser,
    }
    return { props }
}
