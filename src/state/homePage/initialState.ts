import { selector } from 'recoil'
import { currentPageAtom } from 'state/currentPage'
import { initialStateAtom } from 'state/initialState'
import { HomePageInitialState } from 'types/homePage/hydration'

// The initial data for the list page is set in Next.js `getServerSideProps`.
// This selector casts the `unknown` data returned from `initialStateAtom`, but
// only after verifying that we're on the home page
export const initialHomePageStateSelector = selector({
    key: 'initialHomePageStateSelector',
    get: ({ get }) => {
        if (get(currentPageAtom) !== '/') {
            throw new Error(
                'Cannot use initialHomePageStateSelector outside of the home page',
            )
        }
        return get(initialStateAtom) as HomePageInitialState
    },
})
