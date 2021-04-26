import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../elements/Button';
import Input from '../elements/Input';
import { getRepositoryContentByName } from '../../features/githubRepository/githubRepository.actions';
import { StyledFormContainer, StyledForm, StyledFormTitle } from './githubRepositoryForm.styles';

const GithubRepositoryForm = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.githubRepository);
  const initialValues = {};

  const handleSubmit = async (values) => {
    if (!loading) {
      dispatch(getRepositoryContentByName(values.name));
    }
  };

  const formSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
  });

  return (
    <StyledFormContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={formSchema}
        enableReinitialize
      >
        {({ handleSubmit }) => (
          <div>
            <StyledFormTitle>Github Repository Form</StyledFormTitle>
            <StyledForm onSubmit={handleSubmit}>
              <Input name="name" label="Name" />
              <Button title="Submit" />
            </StyledForm>
          </div>
        )}
      </Formik>
    </StyledFormContainer>
  );
};

export default GithubRepositoryForm;
