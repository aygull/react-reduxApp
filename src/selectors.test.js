import { currentPageSelector, isOpenedSelector } from './selectors'

describe('selectors tests', () => {
    describe('currentPageSelector', () => {
        it('', () => {
            const selectorFunc = currentPageSelector.resultFunc;

            expect(selectorFunc(7, [1,2,3,4,5,6])).toBe(0);
        });
    });

    describe('isOpenedSelector', () => {
        it('', ()=> {
            const state = {
                expanded: [],
            };

            expect(isOpenedSelector(state, '111')).toBeFalsy();
        });

        it('', ()=> {
            const state = {
                expanded: ['111', '2222'],
            };

            expect(isOpenedSelector(state, '111')).toBeTruthy();
        })
    });
})