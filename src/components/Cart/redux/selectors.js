import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCart = state => state.cart || initialState;

const makeSelectCartItems = () => createSelector(selectCart, substate => substate.cartItems);

export { 
  makeSelectCartItems
};
