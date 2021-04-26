import { apiSuccess } from '../../request/request.actions';
import {
  GET_REPOSITORY_CONTENT_BY_NAME,
  SEARCH_TEXT_IN_REPOSITORY,
} from '../githubRepository.actions';
import GithubRepositoryReducer, { initialState } from '../githubRepository.reducer';

describe('Github repository reducer', () => {
  let getState;

  beforeEach(() => {
    getState = jest.fn();
    getState.mockReturnValue();
  });

  it('should return initial state', () => {
    const action = { type: 'SOME_ACTION' };
    expect(GithubRepositoryReducer(undefined, action)).toEqual(initialState);
  });

  it('should return repository name when action triggered', () => {
    const repositoryName = 'some-name';
    const action = {
      type: GET_REPOSITORY_CONTENT_BY_NAME,
      payload: {
        name: repositoryName,
      },
    };

    expect(GithubRepositoryReducer(initialState, action).repositoryName).toEqual(repositoryName);
  });

  it('should return repository words when action triggered', () => {
    const text = 'some-text';
    const totalCount = 5;
    const response = {
      total_count: totalCount,
    };
    const repositoryWords = [{ name: text, totalCount }];

    const action = apiSuccess(response, SEARCH_TEXT_IN_REPOSITORY, { text });

    expect(GithubRepositoryReducer(initialState, action).repositoryWords).toEqual(repositoryWords);
  });
});
