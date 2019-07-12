import { expandedReducer, activePageReducer, searchStringReducer,
    sortingReducer, sortKeyReducer} from './reducers';

describe('reducers test', () => {
    describe('expandedReducer', () => {
        const action = { type: '', payload: '' };

        it('should return default state', () => {
            const state = undefined;
            expect(expandedReducer(state, action)).toEqual([]);
        });

        it('should add value to array', () => {
            let state = [];

            action.type = 'OPEN_INFO';
            action.payload = '1111';
            expect(expandedReducer(state, action)).toEqual(['1111']);

            state = ['2222'];
            expect(expandedReducer(state, action)).toEqual(['2222', '1111']);
        });

        it('should remove value to array', () => {
            let state = ['1111'];

            action.type = 'HIDE_INFO';
            action.payload = '1111';
            expect(expandedReducer(state, action)).toEqual([]);
        });

        it('should not remove value to array', () => {
            let state = ['2222'];

            action.type = 'HIDE_INFO';
            action.payload = '1111';
            expect(expandedReducer(state, action)).toEqual(['2222']);
        });
    });
    describe('activePageReducer', () =>{

        it('should return payload', () => {
            const action = { type: 'SET_PAGE', payload: '11' };
            let state  ='12';
            expect(activePageReducer(state, action)).toEqual('11');
        });
    });
    describe('searchStringReducer', () =>{

        it('should return payload', () => {
            const action = { type: 'SET_SEARCH_STRING', payload: '11' };
            let state  ='122';
            expect(searchStringReducer(state, action)).toEqual('11');
        });
    });
    describe('sortingReducer', () =>{
        it('should return payload', () => {
            const action = { type: 'SET_SORTING', payload: '11' };
            let state  ='12';
            expect(sortingReducer(state, action)).toEqual('11');
        });
    });
    describe('sortKeyReducer', () =>{
        it('should return payload', () => {
            const action = { type: 'SET_SORTING_KEY', payload: '11' };
            let state  ='12';
            expect(sortKeyReducer(state, action)).toEqual('11');
        });
    });
});