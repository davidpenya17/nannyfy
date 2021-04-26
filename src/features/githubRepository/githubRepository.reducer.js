import {
  SEARCH_TEXT_IN_REPOSITORY,
  GET_REPOSITORY_CONTENT_BY_NAME,
  GET_REPOSITORY_CONTENT_BY_URL,
} from './githubRepository.actions';
import { API_SUCCESS, SET_LOADING } from '../request/request.actions';

export const initialState = {
  loading: false,
  repositoryName: null,
  repositoryWords: [],
};

const GithubRepositoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOSITORY_CONTENT_BY_NAME: {
      return {
        ...state,
        repositoryName: action.payload.name,
      };
    }
    case `${GET_REPOSITORY_CONTENT_BY_NAME} ${SET_LOADING}`:
    case `${GET_REPOSITORY_CONTENT_BY_URL} ${SET_LOADING}`:
    case `${SEARCH_TEXT_IN_REPOSITORY} ${SET_LOADING}`:
      return {
        ...state,
        loading: action.payload.data,
      };
    case `${SEARCH_TEXT_IN_REPOSITORY} ${API_SUCCESS}`: {
      const totalCount = action.payload.data.total_count;
      const { repositoryWords } = state;
      let newRepositoryWords = {};
      if (totalCount > 0) {
        newRepositoryWords = { name: action.payload.meta.extraData.text, totalCount };
        const isRepositoryWordAdded = repositoryWords.find(
          (o) => o.name === newRepositoryWords.name
        );
        if (!isRepositoryWordAdded) {
          repositoryWords.push(newRepositoryWords);
        }
      }
      return {
        ...state,
        ...repositoryWords,
      };
    }
    default:
      break;
  }
  return state;
};

export default GithubRepositoryReducer;
