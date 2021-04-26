import requester from './requester';

import { API_ERROR, API_REQUEST, API_SUCCESS, setLoading } from './request.actions';

const ApiMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  switch (true) {
    case action.type.includes(API_REQUEST):
      dispatch(setLoading(true, action.payload.meta.entity));
      requester(action.payload, dispatch);
      break;
    case action.type.includes(API_SUCCESS):
    case action.type.includes(API_ERROR):
      dispatch(setLoading(false, action.payload.meta.entity));
      break;
    default:
      break;
  }
};

export default ApiMiddleware;
