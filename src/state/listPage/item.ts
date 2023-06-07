import { useCallback } from 'react';
import { atom, selector, selectorFamily, useRecoilState } from 'recoil';
import { PostAddItemRequest, PostAddItemResponse } from 'types/api';
import { Item } from 'types/item';
import { del, post, put } from 'utils';

import { filterAtom } from './filter';

import { initialListPageStateSelector } from './initialState';

const allItemsAtom = atom({
  key: 'allItemsAtom',

  // We set the default to a selector so that we can grab the initial value
  // from the initial value atom, which is set during first render in the
  // Recoil root in _app.tsx
  default: selector({
    key: 'allItemsInitializer',
    get: ({ get }) => get(initialListPageStateSelector).items,
  }),
});

// Note: normally we'd just have the backend only return items associated with a
// list, but that would make this selector a little too simple, so we
// inneficiently send all items so so this selector has more to do
export const itemIdsInListSelector = selectorFamily<number[], number>({
  key: 'items-in-list',
  get:
    (listId) =>
    ({ get }) => {
      const allItems = get(allItemsAtom);
      const filter = get(filterAtom);
      const items: number[] = [];

      // Filter out items that are either not a part of this list or
      // should not be visible based on the current view filter
      for (const item of allItems) {
        if (item.listId === listId) {
          switch (filter) {
            case 'all': {
              items.push(item.id);
              break;
            }
            case 'completed': {
              if (item.completed) {
                items.push(item.id);
              }
              break;
            }
            case 'uncompleted': {
              if (!item.completed) {
                items.push(item.id);
              }
              break;
            }
          }
        }
      }
      return items;
    },
});

// Given an item ID, this returns the entire item
export const itemSelector = selectorFamily<Item, number>({
  key: 'item',
  get:
    (id) =>
    ({ get }) => {
      const items = get(allItemsAtom);
      const item = items.find((i) => i.id === id);
      if (!item) {
        throw new Error(`Could not find item with id ${id}`);
      }
      return item;
    },
});

// Hooks for working with state. I thought up this pattern and found it a rather
// nice way to easily make API calls without much overhead. I put these in this
// file so that they can be reused throughout the site, and to consolidate state
// management logic.

export function useAddItem() {
  const [allItems, setAllItems] = useRecoilState(allItemsAtom);
  return useCallback(
    async (body: PostAddItemRequest) => {
      const newItem = await post<PostAddItemRequest, PostAddItemResponse>(
        '/api/item',
        body,
      );
      setAllItems([...allItems, newItem]);
    },
    [allItems, setAllItems],
  );
}

export function useDeleteItem() {
  const [allItems, setAllItems] = useRecoilState(allItemsAtom);
  return useCallback(
    async (item: Item) => {
      await del(`/api/item/${item.id}`);
      setAllItems(allItems.filter((i) => i.id !== item.id));
    },
    [allItems, setAllItems],
  );
}

export function useToggleItemCompleted() {
  const [allItems, setAllItems] = useRecoilState(allItemsAtom);
  return useCallback(
    async (item: Item) => {
      const updateItem = {
        ...item,
        completed: !item.completed,
      };
      await put(`/api/item/${item.id}`, updateItem);
      setAllItems(
        allItems.map((i) => {
          if (i.id !== item.id) {
            return i;
          }
          return updateItem;
        }),
      );
    },
    [allItems, setAllItems],
  );
}
