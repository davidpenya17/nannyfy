import {
  apiError,
  apiRequest,
  apiSuccess,
  API_ERROR,
  API_REQUEST,
  API_SUCCESS,
} from '../request.actions';

describe('Api actions testing', () => {
  it('should return the type', () => {
    const entity = 'SOME_ENTITY';
    const url = 'http://mockurl.com';
    const method = 'GET';
    const body = 'body';
    const headers = { 'Header-test': 'test' };
    const extraData = { extraData: 'extra data mock' };

    expect(apiRequest(entity, url, method, body, headers, extraData)).toEqual({
      type: `${entity} ${API_REQUEST}`,
      payload: {
        data: body,
        meta: {
          entity,
          url,
          method,
          headers,
          extraData,
        },
      },
    });
  });

  it('should return success', () => {
    const entity = 'SOME_ENTITY';
    const httpCode = 200;
    const extraData = { extraData: 'extra data mock' };
    const response = 'request response';

    expect(apiSuccess(response, entity, extraData, httpCode)).toEqual({
      type: `${entity} ${API_SUCCESS}`,
      payload: {
        data: response,
        meta: { entity, extraData, httpCode },
      },
    });
  });

  it('should return an error', () => {
    const entity = 'SOME_ENTITY';
    const httpCode = 0;
    const extraData = { extraData: 'extra data mock' };
    const response = 'error response';
    const requestPayload = { data: 'some payload' };

    expect(apiError(response, entity, extraData, requestPayload, httpCode)).toEqual({
      type: `${entity} ${API_ERROR}`,
      payload: {
        data: response,
        meta: {
          entity,
          requestPayload,
          httpCode,
          extraData,
        },
      },
    });
  });
});
