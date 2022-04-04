import { VIEW_ALERT, HIDE_ALERT } from '../Types';

export const viewAlert = alert => ({
    type: VIEW_ALERT,
    payload: alert
});

export const hideAlert = () => ({
    type: HIDE_ALERT
});