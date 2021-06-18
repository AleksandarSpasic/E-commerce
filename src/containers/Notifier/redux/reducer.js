import produce from 'immer';
import types from './types';

export const initialState = {
  notifications: [],
  variant: 'success'
};

/* eslint-disable default-case */
const notifierReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.ENQUEUE_SNACKBAR:
        draft.variant = action.variant;
        draft.notifications.push({
          key: action.notification.key,
          ...action.notification
        });
        break;
      case types.CLOSE_SNACKBAR:
        draft.variant = 'success';
        draft.notifications = draft.notifications.map(notification => {
          if (action.dismissAll || notification.key === action.key) {
            notification.dismissed = true;
          }
          return notification;
        });
        break;
      case types.REMOVE_SNACKBAR:
        draft.variant = 'success';
        draft.notifications = draft.notifications.filter(
          notification => notification.key !== action.key
        );
        break;
    }
  });

export default notifierReducer;
