import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProducts = state => state.products || initialState;

const makeSelectProducts = () => createSelector(selectProducts, substate => substate.products);

export { 
  makeSelectProducts
};
