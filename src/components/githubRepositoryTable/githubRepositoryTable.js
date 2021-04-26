import React from 'react';
import {
  StyledTable,
  StyledTableBody,
  StyledTableRow,
  StyledTableDataSm,
  StyledRepositoryWord,
  StyledTableDataXl,
  StyledTableTitle,
  StyledEmptyTable,
} from './githubRepositoryTable.styles';
import { useSelector } from 'react-redux';

const GithubRepositoryTable = () => {
  const { repositoryWords } = useSelector((state) => state.githubRepository);

  return (
    <StyledTable>
      <StyledTableTitle>Repository Word Occurrences</StyledTableTitle>
      {Object.values(repositoryWords).length === 0 && (
        <StyledEmptyTable>No words occurrences found</StyledEmptyTable>
      )}
      <StyledTableBody>
        {Object.values(repositoryWords).map((repositoryWord, number) => (
          <StyledTableRow key={number}>
            <StyledTableDataXl>
              <StyledRepositoryWord>{repositoryWord.name}</StyledRepositoryWord>
            </StyledTableDataXl>
            <StyledTableDataSm>{repositoryWord.totalCount}</StyledTableDataSm>
          </StyledTableRow>
        ))}
      </StyledTableBody>
    </StyledTable>
  );
};

export default GithubRepositoryTable;
