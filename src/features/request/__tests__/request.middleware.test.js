import { apiRequest } from '../request.actions';
import apiMiddleware from '../request.middleware';
import requester from '../requester';

jest.mock('../requester.js', () => jest.fn());

describe('Api middleware', () => {
  let next;
  let dispatch;
  let requestMock;

  beforeEach(() => {
    dispatch = jest.fn();
    next = jest.fn();
    requestMock = jest.fn();
    requester.mockReturnValue(requestMock);
  });

  it('should fetch the given request', () => {
    // given
    const body = '';
    const method = 'POST';
    const url = 'http://some.url/random-uri';
    const headers = {};
    const entity = 'SOME ENTITY';
    const action = apiRequest(entity, url, method, body, headers);

    // when
    apiMiddleware({ dispatch })(next)(action);

    // then
    expect(requester).toHaveBeenCalledWith(action.payload, dispatch);
  });
});
