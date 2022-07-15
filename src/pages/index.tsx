import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { getLists } from 'server/db'
import { List } from 'types'

interface HomePageProps {
    lists: List[]
}

const HomePage: NextPage<HomePageProps> = ({ lists }: HomePageProps) => (
    <div>
        <Head>
            <title>Multi-todo</title>
        </Head>
        Home
        {JSON.stringify(lists)}
    </div>
)

export default HomePage

export const getServerSideProps: GetServerSideProps<
    HomePageProps
> = async () => {
    const lists = await getLists()
    return {
        props: {
            lists,
        },
    }
}
