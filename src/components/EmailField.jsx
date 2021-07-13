import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

function EmailField(props) {
  const StyledTextField = styled(TextField)`
    background-color: hsl(0, 0%, 100%);
    border: 1px solid hsl(243, 87%, 12%);
    font-family: 'Raleway';
    fontWeight: 700;
    height: 40px;
    width: 100%;
  `;

  return (
    <StyledTextField
      placeholder="email@example.com"
      InputProps={{ disableUnderline: true }}
    />
  );
}

export default EmailField;
