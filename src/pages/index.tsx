import { AddList } from 'components/homePage/addList'
import { Lists } from 'components/homePage/lists'
import { SiteHeader } from 'components/siteHeader'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getCurrentUser, getLists } from 'server/db'
import { HomePageInitialState } from 'types/hydration'

function HomePage() {
    return (
        <div>
            <Head>
                <title>Multi-todo</title>
            </Head>
            <SiteHeader />
            <div className="container">
                <AddList />
                <Lists />
                <style jsx>{`
                    .container {
                        padding: 20px;
                    }
                `}</style>
            </div>
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
