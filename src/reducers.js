import { combineReducers } from 'redux';
import data from './data.json';

export const expandedReducer = (state = [], { type, payload }) => {
  if (type === 'HIDE_INFO'){
      return state.filter(
          item => item !== payload);
  }
  if (type === 'OPEN_INFO'){
      return [...state, payload];
  }
  return state;

};

export const activePageReducer=(state=0, {type, payload})=>{
    if (type === 'SET_PAGE'){
        return  payload;
    }
    return state;
};

export  const searchStringReducer = (state = '', { type, payload }) => {
    if (type === 'SET_SEARCH_STRING') {
        return payload;
    }
    return state;
};

const dataReducer = (state = data) => state;

export const sortingReducer  = (state = '', { type, payload })=>{
  if (type === 'SET_SORTING'){
      return payload;
  }
  return state;
};

export const sortKeyReducer  = (state = '', { type, payload })=>{
    if (type === 'SET_SORTING_KEY'){
        return payload;
    }
    return state;
};



const rootReducer = combineReducers({
    expanded: expandedReducer,
    data:dataReducer,
    activePage:activePageReducer,
    searchString: searchStringReducer,
    sorting:sortingReducer,
    sortingKey:sortKeyReducer,
});

export default rootReducer;