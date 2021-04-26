import { API_SUCCESS, apiRequest } from '../request/request.actions';
import {
  SEARCH_TEXT_IN_REPOSITORY,
  searchTextInRepository,
  GET_REPOSITORY_CONTENT_BY_NAME,
  GET_REPOSITORY_CONTENT_BY_URL,
  getRepositoryContentByUrl,
} from './githubRepository.actions';
import extractNameFromFilename from '../../utils/extractFilename';

const GithubRepositoryMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  switch (action.type) {
    case GET_REPOSITORY_CONTENT_BY_NAME:
      dispatch(
        apiRequest(
          GET_REPOSITORY_CONTENT_BY_NAME,
          `https://api.github.com/repos/${action.payload.name}/contents`,
          'GET'
        )
      );
      break;
    case GET_REPOSITORY_CONTENT_BY_URL:
      dispatch(apiRequest(GET_REPOSITORY_CONTENT_BY_URL, action.payload.url, 'GET'));
      break;
    case `${GET_REPOSITORY_CONTENT_BY_NAME} ${API_SUCCESS}`:
    case `${GET_REPOSITORY_CONTENT_BY_URL} ${API_SUCCESS}`:
      if (action.payload.data) {
        parseGithubRepository(action.payload.data, dispatch);
      }
      break;
    case SEARCH_TEXT_IN_REPOSITORY:
      dispatch(
        apiRequest(
          SEARCH_TEXT_IN_REPOSITORY,
          `https://api.github.com/search/code?q=${action.payload.text}+in:file,path+repo:${
            getState().githubRepository.repositoryName
          }`,
          'GET',
          {},
          {},
          { text: action.payload.text }
        )
      );
      break;
    default:
      break;
  }
  return next(action);
};

const parseGithubRepository = (repositoryFiles, dispatch) => {
  repositoryFiles.forEach((content) => {
    if (content.type === 'file') {
      const filename = extractNameFromFilename(content.name);
      if (filename !== '') {
        dispatch(searchTextInRepository(filename));
      }
    } else if (content.type === 'dir') {
      dispatch(getRepositoryContentByUrl(content.url));
    }
  });
};

export default GithubRepositoryMiddleware;
