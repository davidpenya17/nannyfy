export const API_ERROR = 'API_ERROR';
export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const SET_LOADING = 'SET_LOADING';

export const apiRequest = (entity, url, method, body = null, headers = null, extraData = null) => ({
  type: `${entity} ${API_REQUEST}`,
  payload: {
    data: body,
    meta: {
      method,
      url,
      entity,
      headers,
      extraData,
    },
  },
});

export const apiSuccess = (response, entity, extraData, httpCode) => ({
  type: `${entity} ${API_SUCCESS}`,
  payload: {
    data: response,
    meta: { entity, extraData, httpCode },
  },
});

export const apiError = (data, entity, extraData, requestPayload, httpCode = 0) => ({
  type: `${entity} ${API_ERROR}`,
  payload: {
    data,
    meta: {
      entity,
      requestPayload,
      httpCode,
      extraData,
    },
  },
});

export const setLoading = (state, entity) => ({
  type: `${entity} ${SET_LOADING}`,
  payload: {
    data: state,
    meta: { entity },
  },
});
