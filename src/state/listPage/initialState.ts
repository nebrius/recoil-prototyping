import { selector } from 'recoil'
import { currentPageAtom } from 'state/currentPage'
import { initialStateAtom } from 'state/initialState'
import { ListPageInitialState } from 'types/listPage/hydration'

// The initial data for the list page is set in Next.js `getServerSideProps`.
// This selector casts the `unknown` data returned from `initialStateAtom`, but
// only after verifying that we're on the list page
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
