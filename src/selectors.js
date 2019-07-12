import { ITEMS_PER_PAGE } from "./constants";
import {sortNames, getPageItems, sortByKey} from "./utils";
import { createSelector } from "reselect";
import * as R from 'ramda';

export const dataSelector = state => state.data;
export const searchStringSelector = state => state.searchString;

export const sortingSelector = state =>state.sorting;
export const activePageSelector = state => state.activePage;
export const sortingKeySelector = state =>state.sortingKey;

export const filteredItemsSelector = createSelector([
    dataSelector,
    searchStringSelector,
], (items,searchString) => {
    const searchStringLowered = searchString.toLowerCase();

    return items.filter(item => item.name.toLowerCase().includes(searchStringLowered))
});

export const getExpandedNode = state => state.expanded;

export const isOpenedSelector = (state, id) => createSelector(
    getExpandedNode,
    // expanded => expanded.includes(id),
    R.includes(id),
)(state);

export  const pagesSelector = createSelector(
    filteredItemsSelector, (items) =>{
        const maxPages = Math.ceil(items.length / ITEMS_PER_PAGE);
        return Array.from({ length: maxPages }, (_, i) => i);
    }
);

export const currentPageSelector = createSelector([
    activePageSelector,
    pagesSelector,
], (activePage, pages) => (activePage > pages.length - 1 ? 0 : activePage));

export  const itemsSelector = createSelector([
    filteredItemsSelector,
    currentPageSelector,
    sortingSelector,
    sortingKeySelector,
    ],(items, currentPage, currentSort, currentSortingKey) =>{
        const sortFunction = sortByKey(currentSortingKey);
        if (!sortFunction[currentSort]){
            return getPageItems(items, currentPage);
     }
     return getPageItems(sortFunction[currentSort](items), currentPage);
    }
);


