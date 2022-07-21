import { ItemList } from 'components/todo/itemList'
import { Metadata } from 'components/todo/metadata'
import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import { getItemsForList, getList } from 'server/db'
import { InitialRecoilState } from 'state/initialRecoilStateContext'
import { List } from 'types'

interface TodoPageProps extends InitialRecoilState {
    currentListId: List['id']
}

const TodoPage: NextPage<TodoPageProps> = ({
    currentListId,
}: TodoPageProps) => (
    <div>
        <Head>
            <title>Todo {currentListId}</title>
            <meta name="description" content="Generated by create next app" />
        </Head>
        <Metadata currentListId={currentListId} />
        <ItemList currentListId={currentListId} />
    </div>
)

export default TodoPage

export const getServerSideProps: GetServerSideProps<
    TodoPageProps
> = async context => {
    const list = await getList(parseInt(context.query.id as string, 10))
    if (!list) {
        return {
            notFound: true,
        }
    }
    const items = await getItemsForList(list.id)
    return {
        props: {
            lists: [list],
            items,
            currentListId: list.id,
        },
    }
}
