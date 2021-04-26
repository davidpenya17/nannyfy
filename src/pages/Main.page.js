import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import GithubRepositoryForm from '../components/githubRepositoryForm/githubRepositoryForm';
import GithubList from '../components/githubRepositoryTable/githubRepositoryTable';
import { useSelector } from 'react-redux';
import Spinner from '../components/elements/Spinner';

const MainPage = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;

const MainPageContent = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const StyledSpinnerWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const Main = () => {
  const theme = useContext(ThemeContext);
  const { loading } = useSelector((state) => state.githubRepository);

  return (
    <MainPage data-testid="main-page" theme={theme}>
      {!loading ? (
        <MainPageContent>
          <GithubRepositoryForm />
          <GithubList />
        </MainPageContent>
      ) : (
        <StyledSpinnerWrapper>
          <Spinner />
        </StyledSpinnerWrapper>
      )}
    </MainPage>
  );
};

export default Main;
