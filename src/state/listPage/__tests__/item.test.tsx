import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ListPage from 'pages/list/[id]'
import { TEST_USER } from 'server/db'
import { RecoilObserver, RecoilTestRoot } from 'test/util'
import { Item } from 'types/item'
import { List } from 'types/list'
import { ListPageInitialState } from 'types/listPage/hydration'

import { filterAtom } from '../filter'
import { itemIdsInListSelector } from '../item'

const LIST: List = {
    id: 1,
    name: 'My list',
}

const ITEMS: Item[] = [
    {
        id: 1,
        listId: LIST.id,
        name: 'One',
        completed: true,
    },
    {
        id: 2,
        listId: LIST.id,
        name: 'Two',
        completed: false,
    },
    {
        id: 3,
        listId: LIST.id,
        name: 'Three',
        completed: false,
    },
]

function ListPageRoot({ children }: { children?: React.ReactNode }) {
    const pageProps: ListPageInitialState = {
        currentUser: TEST_USER,
        list: LIST,
        items: ITEMS,
    }
    return (
        <RecoilTestRoot pagePath="/list/[id]" pageProps={pageProps}>
            {children}
        </RecoilTestRoot>
    )
}

describe('Item state', () => {
    it('Can filter items', async () => {
        // We set up two Recoil observers to monitor how our atoms/selectors
        // change over time. This allows us to make sure that the filter value
        // is taken into account when determining which list items to show
        const onFilterChange = jest.fn()
        const onListChange = jest.fn()
        render(
            <ListPageRoot>
                <RecoilObserver atom={filterAtom} onChange={onFilterChange} />
                <RecoilObserver
                    atom={itemIdsInListSelector(LIST.id)}
                    onChange={onListChange}
                />
                <ListPage list={LIST} items={ITEMS} currentUser={TEST_USER} />
            </ListPageRoot>,
        )

        // Start by checking the default value, 'all'
        expect(onFilterChange).toHaveBeenCalledTimes(1)
        expect(onFilterChange).toHaveBeenCalledWith('all')
        expect(onListChange).toHaveBeenCalledTimes(1)
        expect(onListChange).toHaveBeenCalledWith(ITEMS.map(i => i.id))

        // Now check that we filter out uncompleted items when we select to only show completed items
        await userEvent.selectOptions(screen.getByRole('combobox'), 'completed')
        expect(onFilterChange).toHaveBeenCalledTimes(2)
        expect(onFilterChange).toHaveBeenCalledWith('completed')
        expect(onListChange).toHaveBeenCalledTimes(2)
        expect(onListChange).toHaveBeenCalledWith(
            ITEMS.filter(i => i.completed).map(i => i.id),
        )

        // Now check that we filter out completed items when we select to only show uncompleted items
        await userEvent.selectOptions(
            screen.getByRole('combobox'),
            'uncompleted',
        )
        expect(onFilterChange).toHaveBeenCalledTimes(3)
        expect(onFilterChange).toHaveBeenCalledWith('completed')
        expect(onListChange).toHaveBeenCalledTimes(3)
        expect(onListChange).toHaveBeenCalledWith(
            ITEMS.filter(i => !i.completed).map(i => i.id),
        )
    })
})
