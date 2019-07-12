import {
    getExpandedNode,
    currentPageSelector,
    pagesSelector,
    sortingSelector,
    sortingKeySelector,
    dataSelector,
} from "./selectors";

const openInfo = id => ({ type: 'OPEN_INFO', payload: id  });

const hideInfo = id => ({ type: 'HIDE_INFO', payload: id  });

export const setPage = index=>({type:'SET_PAGE', payload:index});

export const setSearchString = string => ({ type: 'SET_SEARCH_STRING', payload: string });

const setSorting  = direction =>({type: 'SET_SORTING', payload: direction});

const setSortingKey = key =>({type: 'SET_SORTING_KEY', payload: key});

export const prevPage = () => (dispatch, getState) =>{
 const currentPage = currentPageSelector(getState());
 if (currentPage  !== 0){
     dispatch(setPage(currentPage-1));
 }
};

export const setNewPage = (page) => (dispatch, getState) => {
    const currentPage = currentPageSelector(getState());
    if (currentPage !== page) {
        dispatch(setPage(page));
    }
};

export const nextPage = () => (dispatch, getState) =>{
    const currentPage = currentPageSelector(getState());
    const pages = pagesSelector(getState());
    if (currentPage  !== pages.length-1){
        dispatch(setPage(currentPage+1));
    }

};

export const toggleInfo = id => (dispatch, getState) => {
    const expanded = getExpandedNode(getState());

    if (expanded.includes(id)) {
        dispatch(hideInfo(id));
    } else {
        dispatch(openInfo(id));
    }
};

export const removeSorting=() =>(dispatch)=>{
    dispatch(setSorting(''));
    dispatch(setSortingKey(''));
};

export const toggleSorting = (key, isToggle) => {
    return (dispatch, getState) => {
        const currentSorting = sortingSelector(getState());
        const currentSortingKey = sortingKeySelector(getState());
        dispatch(setSortingKey(key));
        if (key !== currentSortingKey) {
            return dispatch(setSorting('asc'));
        }

        if (currentSorting === '' || currentSorting === 'desc') {

            return dispatch(setSorting('asc'));
        }
        return dispatch(setSorting('desc'));
    };
};




