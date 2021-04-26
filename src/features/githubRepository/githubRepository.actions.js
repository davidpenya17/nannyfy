export const GET_REPOSITORY_CONTENT_BY_NAME = 'GET_REPOSITORY_CONTENT_BY_NAME';
export const GET_REPOSITORY_CONTENT_BY_URL = 'GET_REPOSITORY_CONTENT_BY_URL';
export const SEARCH_TEXT_IN_REPOSITORY = 'SEARCH_TEXT_IN_REPOSITORY';

export const getRepositoryContentByName = (name) => ({
  type: GET_REPOSITORY_CONTENT_BY_NAME,
  payload: { name },
});

export const getRepositoryContentByUrl = (url) => ({
  type: GET_REPOSITORY_CONTENT_BY_URL,
  payload: { url },
});

export const searchTextInRepository = (text) => ({
  type: SEARCH_TEXT_IN_REPOSITORY,
  payload: { text },
});
