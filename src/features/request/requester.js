import axios from 'axios';
import { apiSuccess, apiError } from './request.actions';

const requester = (payload, dispatch) => {
  const { entity, method, url, extraData } = payload.meta;

  const defaultHeaders = {
    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  };
  const headers = Object.assign({}, payload.meta.headers, defaultHeaders);
  axios({ method, url, data: payload.data, headers })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        dispatch(apiSuccess(res.data, entity, extraData, res.status));
      } else {
        dispatch(apiError(res.data, entity, extraData, payload, res.status));
      }
    })
    .catch((e) => {
      if (e.response) {
        dispatch(apiError(e.response.data, entity, extraData, payload));
      } else {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    });
};

export default requester;
