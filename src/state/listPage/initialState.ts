import { selector } from 'recoil'
import { currentPageAtom } from 'state/currentPage'
import { initialStateAtom } from 'state/initialState'
import { ListPageInitialState } from 'types/listPage/hydration'

export const initialListPageStateSelector = selector({
    key: 'initialListPageStateSelector',
    get: ({ get }) => {
        if (get(currentPageAtom) !== '/list/[id]') {
            throw new Error(
                'Cannot use initialListPageStateSelector outside of the list page',
            )
        }
        return get(initialStateAtom) as ListPageInitialState
    },
})
