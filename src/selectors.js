import { ITEMS_PER_PAGE } from "./constants";
import {sortNames, getPageItems, sortByKey} from "./utils";
import { createSelector } from "reselect";
import * as R from 'ramda';

export const dataSelector = state => state.data;
export const searchStringSelector = state => state.searchString;

export const sortingSelector = state =>state.sorting;
export const activePageSelector = state => state.activePage;
export const sortingKeySelector = state =>state.sortingKey;

export const filteredItemsSelector = state => {
    const items = dataSelector(state);
    const searchString = searchStringSelector(state).toLowerCase();
    return items.filter(item => item.name.toLowerCase().includes(searchString));
};


export const getExpandedNode = state => state.expanded;

// export const isOpenedSelector = (state, id) => {
//     const expanded = getExpandedNode(state);
//
//     return expanded.includes(id);
// };

export const isOpenedSelector = (state, id) => createSelector(
    getExpandedNode,
    // expanded => expanded.includes(id),
    R.includes(id),
)(state);

export const pagesSelector=(state)=>{
    const items = filteredItemsSelector(state);
    const maxPages = Math.ceil(items.length / ITEMS_PER_PAGE);
    return Array.from({ length: maxPages }, (_, i) => i);
};

// export const currentPageSelector = state => {
//     const activePage = activePageSelector(state);
//     const pages = pagesSelector(state);
//
//     return activePage > pages.length - 1 ? 0 : activePage;
// };

export const currentPageSelector = createSelector([
    activePageSelector,
    pagesSelector,
], (activePage, pages) => (activePage > pages.length - 1 ? 0 : activePage));

export const itemsSelector = state => {
    const items = filteredItemsSelector(state);
    const currentPage = currentPageSelector(state);
    const currentSort = sortingSelector(state);
    const currentSortingKey = sortingKeySelector(state);
    // const  sortedItems  = currentSort ==='asc' ? sortNamesAsc(items) : sortNamesDesc(items);
    const sortFunction = sortByKey(currentSortingKey);

    if (!sortFunction[currentSort]){
        return getPageItems(items, currentPage);
    }
    return getPageItems(sortFunction[currentSort](items), currentPage);
};

