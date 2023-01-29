import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormSlyled = styled(Form)`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Label = styled.label`
  color: #2a6b84;
  font-weight: 700;
`;

export const Button = styled.button`
  background-color: #2a6b84;
  color: white;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #458199;
  }
`;
