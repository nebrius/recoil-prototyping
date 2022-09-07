import { useCallback } from 'react'
import { atom, selector, useRecoilState } from 'recoil'
import { PostAddListRequest, PostAddListResponse } from 'types/api'
import { HomePageInitialState, ListPageInitialState } from 'types/hydration'
import { post } from 'utils'

import { initialStateAtom } from './initialState'

export const allListsAtom = atom({
    key: 'allListsAtom',
    default: selector({
        key: 'allListsAtomInitializer',
        // TODO: I don't love this, but not sure of another way to do this
        // without having a giant switch statement in _app.tsx that switches on
        // the current route and sets a per-page initial state atom. Is that
        // preferable?
        get: ({ get }) => (get(initialStateAtom) as HomePageInitialState).lists,
    }),
})

export const currentListAtom = atom({
    key: 'currentListAtom',
    default: selector({
        key: 'currentListAtomInitializer',
        get: ({ get }) => (get(initialStateAtom) as ListPageInitialState).list,
    }),
})

// Hooks for working with state

export function useAddList() {
    const [allListsValues, setAllLists] = useRecoilState(allListsAtom)
    return useCallback(
        async (body: PostAddListRequest) => {
            const newItem = await post<PostAddListRequest, PostAddListResponse>(
                '/api/list',
                body,
            )
            setAllLists([...allListsValues, newItem])
        },
        [allListsValues, setAllLists],
    )
}
