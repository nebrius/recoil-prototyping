import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getLists } from 'server/db'
import { List } from 'types'

interface HomePageProps {
    lists: List[]
}

function HomePage({ lists }: HomePageProps) {
    return (
        <div>
            <Head>
                <title>Multi-todo</title>
            </Head>
            Home
            {JSON.stringify(lists)}
        </div>
    )
}

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
