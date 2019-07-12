import * as R from 'ramda';
import {ITEMS_PER_PAGE} from "./constants";
// import map from 'ramda/src/map';


const asc = key => R.ascend(R.prop(key));
const desc = key => R.descend(R.prop(key));

const byNameAsc = asc('name');
const byNameDesc = desc('name');

// export const sortNamesAsc = R.sort(byNameAsc);
// export const sortNamesDesc = R.sort(byNameDesc);
//
// export const sortNames = {
//     asc: R.sort(byNameAsc),
//     desc: R.sort(byNameDesc),
// };

export const sortByKey = key => ({
    asc: R.sort(asc(key)),
    desc: R.sort(desc(key)),
});


export const getPageItems = (items, activePage) => {
    const start = activePage * ITEMS_PER_PAGE;
    return items.slice(start, start + ITEMS_PER_PAGE);
};