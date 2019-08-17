import axios from 'axios';

import {
  GET_LINK_ANALYTICS,
  RESET_CURRENT_LINK,
  CREATE_LINK,
  DISPLAY_SNACKBAR,
} from '../constants/actionTypes';

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
console.log("process.env.NODE_ENV: " + process.env.NODE_ENV)
console.log("env: " + env)
console.log("config: ")
console.log(config)
console.log("config.API_URL: " + config.API_URL)
console.log(process.env.API_URL)

export const getLinkAnalytics = (tinyUrlId) => async (dispatch) => {
  try {
    const response = await axios.get(`${config.API_URL}/api/links/analytics/${tinyUrlId}`);
    dispatch({
      type: GET_LINK_ANALYTICS,
      payload: response.data,
    });
  } catch (err) {
    const snackbarPayload = {
      variant: 'error',
      msg: err.response.data.message,
    };
    dispatch({
      type: DISPLAY_SNACKBAR,
      payload: snackbarPayload,
    });
    dispatch({
      type: 'GET_LINK_ANALYTICS_ERROR',
      error: err.response.data,
    });
  }
};

export const resetCurrentLink = () => async (dispatch) => {
  dispatch({ type: RESET_CURRENT_LINK });
};

export const createLink = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${config.API_URL}/api/links`, data);
    dispatch({
      type: CREATE_LINK,
      payload: response.data,
    });
  } catch (err) {
    const snackbarPayload = {
      variant: 'error',
      msg: err.response.data.message,
    };
    dispatch({
      type: DISPLAY_SNACKBAR,
      payload: snackbarPayload,
    });    
    dispatch({
      type: 'CREATE_LINK_ERROR',
      error: err.response.data,
    });
  }
};
