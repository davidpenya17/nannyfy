import { apiRequest } from '../../request/request.actions';
import {
  GET_REPOSITORY_CONTENT_BY_NAME,
  GET_REPOSITORY_CONTENT_BY_URL,
  SEARCH_TEXT_IN_REPOSITORY,
  getRepositoryContentByName,
  getRepositoryContentByUrl,
  searchTextInRepository,
} from '../githubRepository.actions';
import GithubRepositoryMiddleware from '../githubRepository.middleware';

describe('Github Repository middleware', () => {
  let next;
  let dispatch;
  let getState;
  const defaultState = {
    githubRepository: {
      repositoryName: 'some-repo-name',
    },
  };

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
    getState.mockReturnValue();
    next = jest.fn();
    jest.resetAllMocks();
  });

  it('should call get repository content by name', () => {
    // given
    const name = 'some-name';
    const action = getRepositoryContentByName(name);
    const url = `https://api.github.com/repos/${name}/contents`;

    // when
    GithubRepositoryMiddleware({ dispatch })(next)(action);

    // then
    expect(dispatch).toHaveBeenCalledWith(apiRequest(GET_REPOSITORY_CONTENT_BY_NAME, url, 'GET'));
  });

  it('should call get repository content by url', () => {
    // given
    const url = 'some-url';
    const action = getRepositoryContentByUrl(url);

    // when
    GithubRepositoryMiddleware({ dispatch })(next)(action);

    // then
    expect(dispatch).toHaveBeenCalledWith(apiRequest(GET_REPOSITORY_CONTENT_BY_URL, url, 'GET'));
  });

  it('should call search text in repository', () => {
    // given
    const text = 'some-text';
    const url = `https://api.github.com/search/code?q=${text}+in:file,path+repo:${defaultState.githubRepository.repositoryName}`;
    const action = searchTextInRepository(text);

    // when
    getState.mockReturnValue(defaultState);
    GithubRepositoryMiddleware({ dispatch, getState })(next)(action);

    // then
    expect(dispatch).toHaveBeenCalledWith(
      apiRequest(SEARCH_TEXT_IN_REPOSITORY, url, 'GET', {}, {}, { text })
    );
  });
});
