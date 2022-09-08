import { selector } from 'recoil'
import { currentPageAtom } from 'state/currentPage'
import { initialStateAtom } from 'state/initialState'
import { HomePageInitialState } from 'types/homePage/hydration'

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
