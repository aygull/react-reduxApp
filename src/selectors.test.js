import {dataSelector, searchStringSelector,sortingSelector, sortingKeySelector, activePageSelector,
    currentPageSelector,getExpandedNode, filteredItemsSelector, isOpenedSelector, pagesSelector, itemsSelector} from './selectors'
import {getPageItems, sortByKey} from "./utils";

describe('selectors tests', () => {
    describe('dataSelector', () =>{
        it('return payload', () =>{
            const state ={
                data:[]
            };
            expect(dataSelector(state)).toEqual([]);
        });
    });
    describe('searchStringSelector', () =>{
       it('return payload', ()=>{
           const state = {
               searchString:"as"
           };
           expect(searchStringSelector(state)).toEqual('as');
       }) ;
    });
    describe('sortingSelector', () =>{
        it('return payload', ()=>{
            const state = {
                sorting:"as"
            };
            expect(sortingSelector(state)).toEqual('as');
        }) ;
    });


    describe('sortingKeySelector', () =>{
        it('return payload', ()=>{
            const state = {
                sortingKey:"as"
            };
            expect(sortingKeySelector(state)).toEqual('as');
        }) ;
    });

    describe('activePageSelector', () =>{
        it('return payload', ()=>{
            const state = {
                activePage:"4"
            };
            expect(activePageSelector(state)).toEqual('4');
        })

    });
    describe('currentPageSelector', () => {
        it('return number page=0', () => {
            const selectorFunc = currentPageSelector.resultFunc;

            expect(selectorFunc(7, [1,2,3,4,5,6])).toBe(0);
        });
        it('return number page!=0', () => {
            const selectorFunc = currentPageSelector.resultFunc;

            expect(selectorFunc(3, [1,2,3,4,5,6])).toBe(3);
        });
    });

    describe('isOpenedSelector', () => {
        it('should return false', ()=> {
            const state = {
                expanded: [],
            };

            expect(isOpenedSelector(state, '111')).toBeFalsy();
        });

        it('should return true', ()=> {
            const state = {
                expanded: ['111', '2222'],
            };

            expect(isOpenedSelector(state, '111')).toBeTruthy();
        })
    });
    describe('filteredItemsSelector', () =>{
        it('should return changed array', ()=>{
            const state = {
                data:[{
                    name:"asass"
                }],
                searchString: "ss"
            };
            expect(filteredItemsSelector(state)).toEqual([{name:'asass'}]);
        })
    });
    describe('pagesSelector', ()=>{
        it('should return changed array by length', () =>{
            const state = {
                data:[{
                    name:"asass"
                }],
                searchString: "ss"
            };
          expect(pagesSelector(state)).toEqual([0]);
        })
    });

    describe('getExpandedNode', () =>{
        it('return payload', ()=>{
            const state = {
                expanded:"as"
            };
            expect(getExpandedNode(state)).toEqual('as');
        }) ;
    });

    // (items, currentPage, currentSort, currentSortingKey) =>{
    //     const sortFunction = sortByKey(currentSortingKey);
    //     if (!sortFunction[currentSort]){
    //         return getPageItems(items, currentPage);
    //     }
    //     return getPageItems(sortFunction[currentSort](items), currentPage);


        describe('itemsSelector', () =>{
        it('return value', ()=>{
            const selectorFunc = itemsSelector.resultFunc;
            let items = [];

            expect(selectorFunc(
                items, 0, 'asc', 'name'
            )).toEqual([]);
            items = [
                {name: 'a'},
                {name: 'd'},
                {name: 'b'},
                {name: 'e'},
                {name: 'c'},

            ];
            expect(selectorFunc(
                items, 0, 'asc', 'name'
            )).toEqual([
                {name: 'a'},
                {name: 'b'},
                {name: 'c'},
                {name: 'd'},
                {name: 'e'},

            ]);
        }) ;

        it('return value for empty key', ()=>{
            const selectorFunc = itemsSelector.resultFunc;
            const items = [];

            expect(selectorFunc(
                items, 0, '', 'name'
            )).toEqual([]);
        }) ;
    });
});