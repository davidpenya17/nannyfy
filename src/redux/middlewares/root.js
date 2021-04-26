import GithubRepositoryMiddleware from '../../features/githubRepository/githubRepository.middleware';
import ApiMiddleware from '../../features/request/request.middleware';

const rootMiddleware = [GithubRepositoryMiddleware, ApiMiddleware];

export default rootMiddleware;
