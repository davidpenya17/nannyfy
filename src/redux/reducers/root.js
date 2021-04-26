import { combineReducers } from 'redux';
import GithubRepositoryReducer from '../../features/githubRepository/githubRepository.reducer';

const rootReducer = combineReducers({
  githubRepository: GithubRepositoryReducer,
});

export default rootReducer;
