import { useCallback } from 'react'
import { atom, selector, useRecoilState } from 'recoil'
import { PostAddListRequest, PostAddListResponse } from 'types/api'
import { post } from 'utils'

import { initialHomePageStateSelector } from './initialState'

export const allListsAtom = atom({
    key: 'allListsAtom',
    default: selector({
        key: 'allListsAtomInitializer',
        get: ({ get }) => get(initialHomePageStateSelector).lists,
    }),
})

// Hooks for working with state. I thought up this pattern and found it a rather
// nice way to easily make API calls without much overhead. I put these in this
// file so that they can be reused throughout the site, and to consolidate state
// management logic.

export function useAddList() {
    const [allLists, setAllLists] = useRecoilState(allListsAtom)
    return useCallback(
        async (body: PostAddListRequest) => {
            const newItem = await post<PostAddListRequest, PostAddListResponse>(
                '/api/list',
                body,
            )
            setAllLists([...allLists, newItem])
        },
        [allLists, setAllLists],
    )
}
