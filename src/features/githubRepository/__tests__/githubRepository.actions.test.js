import {
  GET_REPOSITORY_CONTENT_BY_NAME,
  GET_REPOSITORY_CONTENT_BY_URL,
  SEARCH_TEXT_IN_REPOSITORY,
  getRepositoryContentByName,
  getRepositoryContentByUrl,
  searchTextInRepository,
} from '../githubRepository.actions';

describe('Github repository actions tests', () => {
  it('should return the type and payload of get repository content by name', () => {
    const name = 'some-name';
    expect(getRepositoryContentByName(name)).toEqual({
      type: GET_REPOSITORY_CONTENT_BY_NAME,
      payload: {
        name,
      },
    });
  });

  it('should return the type and payload of get repository content by url', () => {
    const url = 'some-url';
    expect(getRepositoryContentByUrl(url)).toEqual({
      type: GET_REPOSITORY_CONTENT_BY_URL,
      payload: {
        url,
      },
    });
  });

  it('should return the type and payload of search text in repository', () => {
    const text = 'some-text';
    expect(searchTextInRepository(text)).toEqual({
      type: SEARCH_TEXT_IN_REPOSITORY,
      payload: {
        text,
      },
    });
  });
});
