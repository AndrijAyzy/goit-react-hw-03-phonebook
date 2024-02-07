import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  padding: 20px;
  margin-bottom: 50px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: ${p => p.theme.colors.error};
  font-size: 14px;

  @media (max-width: 800px) {
    color: green;
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LabelForm = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledField = styled(Field)`
  width: 400px;
`;

export const AddContactBtn = styled.button`
margin: 0 auto;
margin-top: 32px;
display: block;
width: 100px;
padding: 0px;
height: 25px;
color: #black;
border: 1px solid #000000;
border-radius: 5px;
cursor: pointer;
transition: all 0.25s linear 0s;
&:hover,
&:focus {
  border: 1px solid ##FFFFFF; background: #7CFC00;
  transform: scale(1.1);
`;
